import fse from "fs-extra";
import { fileURLToPath } from 'url';
import path from 'path';

const { readJson, writeJson } = fse;

// __filename y __dirname no están disponibles en los módulos ES6, por lo que se debe usar el paquete 'url' para obtenerlos
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.resolve(__filename, '..');
let pathAnimes = path.resolve(__dirname, '../models/anime.json');

// Controlador para obtener todos los animes
export const getAnimes = async (req, res) => {
    try {
        const animes = await readJson(pathAnimes);
        res.json(animes);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
};

// Controlador para obtener un anime por su id como propiedad
export const getAnimesById = async (req, res) => {
    try {
        const animes = await readJson(pathAnimes);
        const anime = animes[req.params.id]; // Utiliza el id como clave para obtener el anime
        if (anime) {
            res.json(anime);
        } else {
            res.sendStatus(404); // Si no se encuentra el anime, responde con 404 (No encontrado)
        }
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
};

// Controlador para eliminar un anime por su id
export const deleteAnime = async (req, res) => {
    try {
        const animes = await readJson(pathAnimes);
        const anime = animes[req.params.id]; // Utiliza el id como clave para obtener el anime
        if (anime) {
            delete animes[req.params.id]; // Elimina el anime del array
            await writeJson(pathAnimes, animes, { spaces: 2 }); // Guarda el array actualizado en el archivo
            res.json(animes);
        } else {
            res.sendStatus(404); // Si no se encuentra el anime, responde con 404 (No encontrado)
        }
    } catch {
        console.error(error);
        res.sendStatus(500);
    }
};

// Controlador para agregar un anime
export const addAnime = async (req, res) => {
    try {
        const animes = await readJson(pathAnimes);
        const newAnimeId = Object.keys(animes).length + 1; // Obtener el siguiente id basado en las propiedades existentes
        const newAnime = {
            ...req.body
        };
        animes[newAnimeId] = newAnime; // Agregar el nuevo anime usando el nuevo id como propiedad
        await writeJson(pathAnimes, animes, { spaces: 2 });
        res.json(animes);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
};

// Controlador para actualizar un anime 
export const updateAnime = async (req, res) => {
    try {
        const animes = await readJson(pathAnimes);
        const animeId = parseInt(req.params.id);
        const anime = animes[animeId]; // Utiliza el id como clave para obtener el anime
        if (anime) {
            const keys = Object.keys(req.body);
            keys.forEach(key => {
                anime[key] = req.body[key];
            });
            await writeJson(pathAnimes, animes, { spaces: 2 });
            res.json(animes);
        } else {
            res.sendStatus(404); // Si no se encuentra el anime, responde con 404 (No encontrado)
        }
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
};
