import React, { Fragment, useContext, useEffect } from 'react';
import authContext          from '../../context/auth/authContext';

import { Link } from 'react-router-dom';
import {
    LinkHeader,
    IconHeader
} from '../styledcomponents/header.styles';
// Icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PeopleIcon from '@material-ui/icons/People';
import DescriptionIcon from '@material-ui/icons/Description';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import StarsIcon from '@material-ui/icons/Stars';

const Header = () => {

    const authToken                                 = useContext( authContext );
    const { user, getUserByAuth, logoutUser  }      = authToken;

    useEffect(() => {
        // getUserByAuth();
        // eslint-disable-next-line
    }, [])

    return ( 
        <Fragment>
             <header className="app-header">
                {/* Navegación */}
                <div className="nav-header">
                    <Link to={'/products'} >
                        <IconHeader>
                            <StarsIcon fontSize="large" /> 
                            <LinkHeader> 
                                Productos
                            </LinkHeader>
                        </IconHeader>
                    </Link>
                    <Link to={'/pedidos'} >
                        <IconHeader>
                            <CardTravelIcon fontSize="large" /> 
                            <LinkHeader> 
                                Pedidos
                            </LinkHeader>
                        </IconHeader>
                    </Link>
        
                    <Link to={'/ventas'} >
                        <IconHeader>
                            <MonetizationOnIcon fontSize="large" /> 
                            <LinkHeader> 
                                Ventas
                            </LinkHeader>
                        </IconHeader>
                    </Link>
                    <Link to={'/facturacion'} >
                        <IconHeader>
                            <DescriptionIcon fontSize="large" /> 
                            <LinkHeader> 
                                Facturación
                            </LinkHeader>
                        </IconHeader>
                    </Link>
                    <Link to={'/clientes'} >
                        <IconHeader>
                            <PeopleIcon fontSize="large" /> 
                            <LinkHeader> 
                                Clientes
                            </LinkHeader>
                        </IconHeader>
                    </Link>
                    <Link to={'/usuarios'} >
                        <IconHeader>
                            <AccountCircleIcon fontSize="large" /> 
                            <LinkHeader> 
                            Usuarios
                            </LinkHeader>
                        </IconHeader>
                    </Link>
                </div>
                <nav className="nav-principal">
                    {
                        user ? 
                            <h5 className="nombre-usuario">Hola :{" "}<span>{ user.auth.nombre }</span></h5>
                        : null
                    }
                    <button
                        className="btn btn-blank cerrar-sesion"
                        onClick = { () => logoutUser() }
                    >
                        Cerrar Sesión
                    </button>
                </nav>
            </header>
        </Fragment>
     );
}
 
export default Header;