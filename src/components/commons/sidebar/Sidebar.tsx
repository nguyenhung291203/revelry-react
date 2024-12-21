import React from 'react';

import { Link } from 'react-router-dom';

import { colors } from '../../../utils/constants';
import useSidebar from '../../../hooks/useSidebar';

const Sidebar = () => {

    const { isOpen, activeItem, handleSetActiveItem, handleToggleSidebar } = useSidebar();
    const menuItems = [
        { id: 'dashboard', icon: 'bi-house', label: 'Điều hướng', path: '/admin/dashboard' },
        { id: 'users', icon: 'bi-people', label: 'Quản lý người dùng', path: '/admin/users' },
        { id: 'products', icon: 'bi-box-seam', label: 'Quản lý sản phẩm', path: '/admin/products' },
        { id: 'orders', icon: 'bi-bag', label: 'Quản lý đơn hàng', path: '/admin/orders' },
        { id: 'settings', icon: 'bi-gear', label: 'Cài đặt', path: '/admin/settings' },
    ];

    return (
        <div
            className={`d-flex flex-column  vh-100 py-3 px-3`}
            style={{
                transition: 'width 0.3s', width: isOpen ? '244px' : '75px',
                boxShadow: '0 0.125rem 0.25rem rgba(165, 163, 174, 0.3)',
            }}
        >

            {isOpen && <h5 className="mb-0 mb-0 d-flex justify-content-between align-items-center py-3">Admin Panel</h5>}


            <nav className="nav flex-column ">
                {menuItems.map((item) => (
                    <Link
                        key={item.id}
                        to={item.path}
                        className={`nav-link d-flex align-items-center`}
                        onClick={() => handleSetActiveItem(item.id)}
                        style={{
                            borderRadius: '6px',
                            padding: '10px 12px',
                            backgroundColor: activeItem === item.id ? colors.blue : 'transparent',
                            fontWeight: '500',
                            color: activeItem === item.id ? colors.white : colors.gray,
                            marginBottom: '5px',
                        }}
                    >
                        <i
                            className={`bi ${item.icon}`}
                            style={{
                                fontSize: '20px',
                                marginRight: isOpen ? '10px' : '0',
                                width: '20px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}
                        ></i>
                        {isOpen && <span>{item.label}</span>}
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
