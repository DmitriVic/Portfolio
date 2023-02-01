
import React, { useState } from "react";
import { Menu, SubMenu, Item } from "burger-menu";
import 'burger-menu/lib/index.css';


import s from './Burger2.module.css'
import cn from 'classnames'
import { Burger2props } from './Burger2.props';
import $ from 'jquery';
import { useEffect } from 'react';


export const Burger2 = ({ modalActive,setState, state, setModalActive }: Burger2props): JSX.Element => {
	function f1() {
		setModalActive(true)
	}
	
	
	//  useEffect(() => {
	// 	//const navContainer = document.querySelector('.bar')
	// 	//console.log(document.querySelector(`.${s['nav-container']}`));
	// 	$(`.${s['toggle-icon']}`).click(function() {
	// 		$(`.${s['nav-container']}`).toggleClass(`${s.pushed}`);
	// 	 });
	 
	//  }, [])
	 //console.log(s.active);
	 console.log(state);
	 const [isOpen, setIsOpen] = useState(false);
	return (

		<>
      <div onClick={() => setIsOpen(!isOpen)}>Icon</div>
      <Menu  customIcon={true} className="burger-menu" isOpen={isOpen} selectedKey={'entry'} onClose={() => setIsOpen(false)}>
        <Item itemKey={'manage'} text={'User Management'}></Item>
        <Item itemKey={'user'} text={'User Center'}></Item>
        {/* <SubMenu title="Union Management">
          <Item itemKey={'notice'} text={'Announcement'}></Item>
          <Item itemKey={'union'} text={'Union Inquiries'}></Item>
          <Item itemKey={'entry'} text={'Entry information'}></Item>
        </SubMenu> */}
      </Menu>
    </>
	)
}

