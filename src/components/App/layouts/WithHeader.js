import React from 'react'
import { Footer } from '../../Footer/Footer'
import { Header } from '../../Header'

export function WithHeader({ children }) {
    return (
        <div className="App">
          <Header />
          <section className="main-container">
            {children}
          </section>
          <Footer />
        </div>
    )
}