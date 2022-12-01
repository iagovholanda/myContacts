const CategoriesRepository = require('../repositories/CategoriesRepository')

class CategoryController {

async index(request, response) {
    const { orderBy } = request.query

    const categories = await CategoriesRepository.findAll(orderBy)
    return response.json(categories)
}

async show(request, response) {
    const { id } = request.params

    const category = await CategoriesRepository.findById(id)

    if(!category) {
        return response.status(404).json({ error: 'Category not found'})
    }

    return response.json({ category })
}

async store(request, response) {
    const { name } = request.body

    if(!name) {
        return response.status(400).json({ message: 'Name is required' })
    }

    const category = await  CategoriesRepository.create({ name })

    return response.json(category)
}

async update(request, response) {
    const { id } = request.params
    const { name } = request.body

    const categorie = await CategoriesRepository.findById(id)

    if(!categorie) {
        return response.status(404).json({ message: 'Categories not found'})
    }

    if(!name) {
        return response.status(400).json({ message: 'Name is required' })
    }

    const categorieByName = await CategoriesRepository.findByName(name)

    if(categorieByName && categorieByName.id !== id) {
        return response.status(400).json({ message: 'Categorie already exists'})
    }

    const category = await CategoriesRepository.update(id, { name })

    return response.json(category)
}

async delete(request, response) {
    const { id } = request.params

    await CategoriesRepository.delete(id)
    return response.sendStatus(204)
}

}



module.exports = new CategoryController()
