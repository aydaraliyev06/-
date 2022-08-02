import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Info from './Components/Info/Info';
import Contact from './Components/Contact/Contact';
import NoteFound from './Components/NoteFound/NoteFound';
import Face from './Components/Face/Face';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Face/>} />
            <Route path='/info' element={<Info/>} />
            <Route path='/films' element={<Contact/>} />
            <Route path='*' element={<NoteFound/>} />
        </Routes>
    );
};

export default Router;