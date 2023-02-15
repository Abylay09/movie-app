import React from 'react'
import { Outlet } from 'react-router'
import styled from 'styled-components'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

const LayoutWrapper = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    .main-content{
        padding : 0 12px;
    }
`

const MainLayout: React.FC = () => {
    return (
        <LayoutWrapper>
            <Header />
            <div className='main-content' style={{ flexGrow: 1 }}>
                <Outlet />
            </div>
            <Footer />
        </LayoutWrapper>
    )
}

export default MainLayout