import React from 'react'
import { Footer } from '../../Footer/Footer'

export function WithoutHeader({ children }) {
    return (
        <div className="App">
          <section className="main-container">
            {children}
          </section>
          <Footer />
        </div>
    )
}