import React from 'react'
import Sale from '../Pages/Sale'
import Categories from '../Pages/categories/index'
import { Routes } from 'react-router-dom'
import Header from '../components/Header'

function home() {
    return (
        <>
        <Header />
        <Sale/>
        <Categories />
        </>
        )
    }
    
    export default home