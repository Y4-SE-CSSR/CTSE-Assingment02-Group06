import axios from "axios";
import dotenv from "dotenv/config";

const wishListAPI = process.env.REACT_APP_WISHLIST_SERVICES_URI;

export const getOneWishList = async (req, res) => {
    axios.get(`${wishListAPI}/${req.params.id}`)
        .then(response => {
            res.status(200).json(response.data);
        }).catch(error => {
            res.status(500).json(error);
        });
}

export const getWishLists = async (req, res) => {
    axios.get(`${wishListAPI}/`)
        .then(response => {
            res.status(200).json(response.data);
        }).catch(error => {
            res.status(500).json(error);
        });
}

export const createWishList = async (req, res) => {
    axios.post(`${wishListAPI}/create`, req.body)
        .then(response => {
            res.status(200).json(response.data);
        }).catch(error => {
            res.status(500).json(error);
        });
}

export const updateWishList = async (req, res) => {
    axios.put(`${wishListAPI}/update/${req.params.id}`, req.body)
        .then(response => {
            res.status(200).json(response.data);
        }).catch(error => {
            res.status(500).json(error);
        });
}

export const deleteWishList = async (req, res) => {
    axios.delete(`${wishListAPI}/delete/${req.params.id}`)
        .then(response => {
            res.status(200).json(response.data);
        }).catch(error => {
            res.status(500).json(error);
        });
}

export const getWishListsForUser = async (req, res) => {
    const userId = req.params.userId;
    axios.get(`${wishListAPI}/user/${userId}`)
        .then(response => {
            res.status(200).json(response.data);
        }).catch(error => {
            res.status(500).json(error);
        });
}
