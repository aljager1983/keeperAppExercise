import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import Notes from '../Notes'

const createNote = (cNote) => {
    return (
        <Note   
                key={cNote.key}
                title={cNote.title}
                content={cNote.content} />
    )
}

const App = () => {
    return (
    <div>
        <Header />
        {Notes.map(createNote)}
        <Footer />
        
    </div>
    
    )
}

export default App