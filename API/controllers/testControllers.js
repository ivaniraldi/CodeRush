const testModel = require("../models/testModel");

// Obtener todos los tests
const getAllTests = async (req, res) => {
    try {
        const tests = await testModel.getAllTests();
        res.status(200).json({ message: "Tests obtenidos exitosamente", data: tests });
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error: error.message });
    }
};

// Crear un test
const createTest = async (req, res) => {
  try {
    const { name, category, visibility } = req.body;
    if (!name || !category || !visibility) {
      return res.status(400).json({ message: "Todos los campos son requeridos" });
    }

    const testId = await testModel.createTest(name, category, visibility);
    res.status(201).json({ message: "Test creado exitosamente", data: { testId } });
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error: error.message });
  }
};

// Obtener tests por categoría
const getTestsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const tests = await testModel.getTestsByCategory(category);
    res.status(200).json({ message: "Tests obtenidos exitosamente", data: tests });
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error: error.message });
  }
};

// Obtener un test específico con sus preguntas
const getTestById = async (req, res) => {
  try {
    const { id } = req.params;
    const test = await testModel.getTestById(id);
    if (!test) {
      return res.status(404).json({ message: "Test no encontrado" });
    }
    res.status(200).json({ message: "Test obtenido exitosamente", data: test });
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error: error.message });
  }
};

// Eliminar un test
const deleteTest = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await testModel.deleteTest(id);
    if (!result) {
      return res.status(404).json({ message: "Error", error: "Test no encontrado" });
    }
    res.status(200).json({ message: "Test eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error: error.message });
  }
};

// Modificar un test
const updateTest = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, category, visibility } = req.body;

    const updatedTest = await testModel.updateTest(id, { name, category, visibility });

    if (!updatedTest) {
      return res.status(404).json({ message: "Error", error: "Test no encontrado" });
    }

    res.status(200).json({ message: "Test actualizado exitosamente", data: updatedTest });
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error: error.message });
  }
};

module.exports = { createTest, getTestsByCategory, getTestById, deleteTest, updateTest, getAllTests };
