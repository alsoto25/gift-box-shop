/**
 * @jest-environment jsdom
 */

import React from 'react'
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render, screen } from '../test-utils'
import HomePage from '@pages/index'
import AboutPage from '@pages/About'
import ContactPage from '@pages/Contact'
import ShopPage from '@pages/Shop'

describe('All Pages', () => {
    it('should contain home link', () => {
        render(<HomePage />)

        const heading = screen.getByText(/Home/i)

        // we can only use toBeInTheDocument because it was imported
        // in the jest.setup.js and configured in jest.config.js
        expect(heading).toBeInTheDocument()
    })
})

describe('All Pages', () => {
    it('should contain shop link', () => {
        render(<HomePage />)

        const heading = screen.getByText(/Shop/i)

        // we can only use toBeInTheDocument because it was imported
        // in the jest.setup.js and configured in jest.config.js
        expect(heading).toBeInTheDocument()
    })
})

describe('All Pages', () => {
    it('should contain contact link', () => {
        render(<HomePage />)

        const heading = screen.getByText(/Contact/i)

        // we can only use toBeInTheDocument because it was imported
        // in the jest.setup.js and configured in jest.config.js
        expect(heading).toBeInTheDocument()
    })
})

describe('All Pages', () => {
    it('should contain about link', () => {
        render(<HomePage />)

        const heading = screen.getByText(/About/i)

        // we can only use toBeInTheDocument because it was imported
        // in the jest.setup.js and configured in jest.config.js
        expect(heading).toBeInTheDocument()
    })
})

describe('All Pages', () => {
    it('should contain home link', () => {
        render(<ShopPage />)

        const heading = screen.getByText(/Home/i)

        // we can only use toBeInTheDocument because it was imported
        // in the jest.setup.js and configured in jest.config.js
        expect(heading).toBeInTheDocument()
    })
})

describe('All Pages', () => {
    it('should contain shop link', () => {
        render(<ShopPage />)

        const heading = screen.getByText(/Shop/i)

        // we can only use toBeInTheDocument because it was imported
        // in the jest.setup.js and configured in jest.config.js
        expect(heading).toBeInTheDocument()
    })
})

describe('All Pages', () => {
    it('should contain contact link', () => {
        render(<ShopPage />)

        const heading = screen.getByText(/Contact/i)

        // we can only use toBeInTheDocument because it was imported
        // in the jest.setup.js and configured in jest.config.js
        expect(heading).toBeInTheDocument()
    })
})

describe('All Pages', () => {
    it('should contain about link', () => {
        render(<ShopPage />)

        const heading = screen.getByText(/About/i)

        // we can only use toBeInTheDocument because it was imported
        // in the jest.setup.js and configured in jest.config.js
        expect(heading).toBeInTheDocument()
    })
})

describe('All Pages', () => {
    it('should contain home link', () => {
        render(<AboutPage />)

        const heading = screen.getByText(/Home/i)

        // we can only use toBeInTheDocument because it was imported
        // in the jest.setup.js and configured in jest.config.js
        expect(heading).toBeInTheDocument()
    })
})

describe('All Pages', () => {
    it('should contain shop link', () => {
        render(<AboutPage />)

        const heading = screen.getByText(/Shop/i)

        // we can only use toBeInTheDocument because it was imported
        // in the jest.setup.js and configured in jest.config.js
        expect(heading).toBeInTheDocument()
    })
})

describe('All Pages', () => {
    it('should contain contact link', () => {
        render(<AboutPage />)

        const heading = screen.getByText(/Contact/i)

        // we can only use toBeInTheDocument because it was imported
        // in the jest.setup.js and configured in jest.config.js
        expect(heading).toBeInTheDocument()
    })
})

describe('All Pages', () => {
    it('should contain about link', () => {
        render(<AboutPage />)

        const heading = screen.getByText(/About/i)

        // we can only use toBeInTheDocument because it was imported
        // in the jest.setup.js and configured in jest.config.js
        expect(heading).toBeInTheDocument()
    })
})

describe('All Pages', () => {
    it('should contain home link', () => {
        render(<ContactPage />)

        const heading = screen.getByText(/Home/i)

        // we can only use toBeInTheDocument because it was imported
        // in the jest.setup.js and configured in jest.config.js
        expect(heading).toBeInTheDocument()
    })
})

describe('All Pages', () => {
    it('should contain shop link', () => {
        render(<ContactPage />)

        const heading = screen.getByText(/Shop/i)

        // we can only use toBeInTheDocument because it was imported
        // in the jest.setup.js and configured in jest.config.js
        expect(heading).toBeInTheDocument()
    })
})

describe('All Pages', () => {
    it('should contain contact link', () => {
        render(<ContactPage />)

        const heading = screen.getByText(/Contact/i)

        // we can only use toBeInTheDocument because it was imported
        // in the jest.setup.js and configured in jest.config.js
        expect(heading).toBeInTheDocument()
    })
})

describe('All Pages', () => {
    it('should contain about link', () => {
        render(<ContactPage />)

        const heading = screen.getByText(/About/i)

        // we can only use toBeInTheDocument because it was imported
        // in the jest.setup.js and configured in jest.config.js
        expect(heading).toBeInTheDocument()
    })
})
