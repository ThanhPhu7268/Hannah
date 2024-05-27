import React, { useState } from 'react'
import logo from '../../assets/logoDark.png'
import '../home/home.css'
import { Tooltip, Drawer, Button, Typography, IconButton, List, ListItem, ListItemPrefix, ListItemSuffix, Chip } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function Header() {
    const [isLiked, setIsLiked] = useState(false);
    const [isLanguage, setIsLanguage] = useState(false);
    const [isMode, setIsMode] = useState(false);
    const [openNav, setOpenNav] = React.useState(false);
    const [openTop, setOpenTop] = React.useState(false);
    const { t, i18n } = useTranslation()
    const closeDrawerTop = () => setOpenTop(false);
    const closeDrawer = () => setOpenNav(false);
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const toggleLike = () => {
        setIsLiked(!isLiked);
    }

    // const toggleLanguage = (lng) => {
    //     setIsLanguage(!isLanguage);

    // }
    const toggleLanguage = () => {
        setIsLanguage((prevIsLanguage) => {
            const newLanguage = prevIsLanguage ? 'en' : 'vn';
            i18n.changeLanguage(newLanguage);
            return !prevIsLanguage;
        });
    };

    const toggleMode = () => {
        setIsMode(!isMode);
    }

    // const changeLanguage = (lng) => {
    //     i18n.changeLanguage(lng)
    // }

    return (
        <div className='max-w-screen-2xl' style={{ margin: 'auto' }}>
            <div className='flex justify-end'>
                <Tooltip content="Language" placement="bottom">
                    <svg className='mt-1 hidden md:block' onClick={toggleLanguage} xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512">
                        {isLanguage ? (
                            <>
                                <mask id="circleFlagsVn0"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
                                <g mask="url(#circleFlagsVn0)">
                                    <path fill="#d80027" d="M0 0h512v512H0z" />
                                    <path fill="#ffda44" d="m256 133.6l27.6 85H373L300.7 271l27.6 85l-72.3-52.5l-72.3 52.6l27.6-85l-72.3-52.6h89.4z" />
                                </g>
                            </>
                        ) : (
                            <>
                                <mask id="circleFlagsUk0"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
                                <g mask="url(#circleFlagsUk0)">
                                    <path fill="#eee" d="m0 0l8 22l-8 23v23l32 54l-32 54v32l32 48l-32 48v32l32 54l-32 54v68l22-8l23 8h23l54-32l54 32h32l48-32l48 32h32l54-32l54 32h68l-8-22l8-23v-23l-32-54l32-54v-32l-32-48l32-48v-32l-32-54l32-54V0l-22 8l-23-8h-23l-54 32l-54-32h-32l-48 32l-48-32h-32l-54 32L68 0z" />
                                    <path fill="#0052b4" d="M336 0v108L444 0Zm176 68L404 176h108zM0 176h108L0 68ZM68 0l108 108V0Zm108 512V404L68 512ZM0 444l108-108H0Zm512-108H404l108 108Zm-68 176L336 404v108z" />
                                    <path fill="#d80027" d="M0 0v45l131 131h45zm208 0v208H0v96h208v208h96V304h208v-96H304V0zm259 0L336 131v45L512 0zM176 336L0 512h45l131-131zm160 0l176 176v-45L381 336z" />
                                </g>
                            </>
                        )}
                    </svg>
                </Tooltip>
                <Tooltip content="Mode" placement="bottom">
                    <svg className='ml-2 hidden md:block' onClick={toggleMode} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" style={{ fill: isMode ? 'blue' : 'red' }}>
                        {isMode ? (
                            <path d="M12.058 20q-3.334 0-5.667-2.333T4.058 12q0-3.038 1.98-5.27Q8.02 4.5 10.942 4.097q.081 0 .159.006t.153.017q-.506.706-.801 1.57t-.295 1.81q0 2.667 1.866 4.533t4.534 1.867q.952 0 1.813-.295q.862-.295 1.548-.801q.012.075.018.153t.005.158q-.384 2.923-2.615 4.904T12.057 20m0-1q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.074 0-5.237-2.162T9.158 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5.058 12q0 2.9 2.05 4.95t4.95 2.05m-.25-6.75" />
                        ) : (
                            <path d="M12 15q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15m0 1q-1.671 0-2.836-1.164T8 12t1.164-2.836T12 8t2.836 1.164T16 12t-1.164 2.836T12 16m-7-3.5H1.5v-1H5zm17.5 0H19v-1h3.5zM11.5 5V1.5h1V5zm0 17.5V19h1v3.5zM6.746 7.404l-2.16-2.098l.695-.744l2.111 2.134zM18.72 19.438l-2.117-2.14l.652-.702l2.16 2.098zM16.596 6.746l2.098-2.16l.744.695l-2.134 2.111zM4.562 18.72l2.14-2.117l.663.652l-2.078 2.179zM12 12" />
                        )}
                    </svg>
                </Tooltip>
            </div>
            <div className='flex flex-row justify-between py-4' style={{ borderBottom: '1px solid', maxWidth: '1200px', margin: 'auto' }} >
                <div class="flex flex-row items-center lg:flex hidden w-96">
                    <li className="list-none m-2 uppercase font-medium text-base"><Link to='/1'>{t('Home')}</Link></li>
                    <li className="list-none m-2 uppercase font-medium text-base"><Link to='/1'>{t('Facial')}</Link></li>
                    <li className="list-none m-2 uppercase font-medium text-base"><Link to='/1'>{t('Hair')}</Link></li>
                    <li className="list-none m-2 uppercase font-medium text-base"><Link to='/1'>{t('Body')}</Link></li>
                    <li className="list-none m-2 uppercase font-medium text-base"><Link to='/1'>{t('Learn')}</Link></li>
                </div>
                <img src={logo} alt='logo' className='mr-10' style={{ width: 'auto', height: '70px' }} />
                <div className='flex flex-row items-center'>
                    <Tooltip content="Search" placement="bottom">
                        <svg className='hidden lg:block' onClick={() => setOpenTop(!openTop)} style={{ margin: '8px' }} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314" />
                        </svg>
                    </Tooltip>
                    <Drawer
                        placement="top"
                        open={openTop}
                        onClose={closeDrawerTop}
                        className="p-4"
                    >
                        <div className="mb-6 flex items-center justify-between">
                            <Typography variant="h5" color="blue-gray">
                                Search
                            </Typography>
                        </div>
                        <div class="input-container">
                            <input className="input" name="text" type="text" />
                            <label className="label" for="input">Search For</label>
                            <div className="topline"></div>
                            <div className="underline"></div>
                        </div>
                    </Drawer>
                    <Tooltip content="Hi!!!" placement="bottom">
                        <svg className='hidden lg:block' style={{ margin: '8px' }} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
                            <path fill="currentColor" d="M229.19 213c-15.81-27.32-40.63-46.49-69.47-54.62a70 70 0 1 0-63.44 0C67.44 166.5 42.62 185.67 26.81 213a6 6 0 1 0 10.38 6c19.21-33.19 53.15-53 90.81-53s71.6 19.81 90.81 53a6 6 0 1 0 10.38-6M70 96a58 58 0 1 1 58 58a58.07 58.07 0 0 1-58-58" />
                        </svg>
                    </Tooltip>
                    <Tooltip content="Cart" placement="bottom">
                        <div className="nav-login-cart">
                            <svg style={{ margin: '8px', marginTop: '15px' }} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
                                <path fill="currentColor" d="M216 68h-44v-4a44 44 0 0 0-88 0v4H40a12 12 0 0 0-12 12v120a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V80a12 12 0 0 0-12-12M92 64a36 36 0 0 1 72 0v4H92Zm128 136a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h44v20a4 4 0 0 0 8 0V76h72v20a4 4 0 0 0 8 0V76h44a4 4 0 0 1 4 4Z" />
                            </svg>
                            <div className="cart-count">0</div>
                        </div>
                    </Tooltip>
                    <Tooltip content="WishList" placement="bottom">
                        <svg className='hidden lg:block' onClick={toggleLike} style={{ margin: '8px', cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            {isLiked ? (
                                <path fill="currentColor" d="M8.106 18.247C5.298 16.083 2 13.542 2 9.137C2 4.274 7.5.825 12 5.501l2 1.998a.75.75 0 0 0 1.06-1.06l-1.93-1.933C17.369 1.403 22 4.675 22 9.137c0 4.405-3.298 6.946-6.106 9.11c-.292.225-.579.445-.856.664C14 19.729 13 20.5 12 20.5s-2-.77-3.038-1.59c-.277-.218-.564-.438-.856-.663" />
                            ) : (
                                <path fill="currentColor" d="m8.962 18.91l.464-.588zM12 5.5l-.54.52l.01.011zm3.038 13.41l.465.59zM13.47 8.03a.75.75 0 1 0 1.06-1.06zM9.426 18.322C7.91 17.127 6.253 15.96 4.938 14.48C3.65 13.028 2.75 11.335 2.75 9.137h-1.5c0 2.666 1.11 4.7 2.567 6.339c1.43 1.61 3.254 2.9 4.68 4.024zM2.75 9.137c0-2.15 1.215-3.954 2.874-4.713c1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06C2.786 4.073 1.25 6.425 1.25 9.137zM8.497 19.5c.513.404 1.063.834 1.62 1.16c.557.325 1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385c-.453-.264-.922-.628-1.448-1.043zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024c1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.198-.9 3.891-2.188 5.343c-1.315 1.48-2.972 2.647-4.488 3.842zM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077c-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596c1.659.759 2.874 2.562 2.874 4.713zm-8.176 9.185c-.526.415-.995.779-1.448 1.043c-.452.264-.816.385-1.126.385v1.5c.69 0 1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16zM11.47 6.032l2 1.998l1.06-1.06l-2-2z" />
                            )}
                        </svg>
                    </Tooltip>
                    <svg onClick={() => setOpenNav(!openNav)} className='block lg:hidden' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M3 4h18v2H3zm6 7h12v2H9zm-6 7h18v2H3z" />
                    </svg>
                    <Drawer open={openNav} onClose={closeDrawer} className="p-4">
                        <div className="mb-2 flex items-center justify-between p-4">
                            <img src={logo} />
                            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </IconButton>
                        </div>
                        <List>
                            <ListItem>
                                <ListItemPrefix>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M4.5 21q-.625 0-1.062-.437T3 19.5v-1.9l4-3.55V21zM8 21v-4h8v4zm9 0v-8.2L12.725 9l3.025-2.675l4.75 4.225q.25.225.375.513t.125.612V19.5q0 .625-.437 1.063T19.5 21zM3 16.25v-4.575q0-.325.125-.625t.375-.5L11 3.9q.2-.2.463-.287T12 3.525t.538.088T13 3.9l2 1.775z" /></svg>
                                </ListItemPrefix>
                                Home
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M5.624 4.424C3.965 5.182 2.75 6.986 2.75 9.137c0 2.197.9 3.891 2.188 5.343c1.063 1.196 2.349 2.188 3.603 3.154c.298.23.594.459.885.688c.526.415.995.778 1.448 1.043c.452.264.816.385 1.126.385c.31 0 .674-.12 1.126-.385c.453-.265.922-.628 1.448-1.043c.29-.23.587-.458.885-.687c1.254-.968 2.54-1.959 3.603-3.155c1.289-1.452 2.188-3.146 2.188-5.343c0-2.15-1.215-3.955-2.874-4.713c-1.474-.673-3.41-.568-5.304 1.088L14.53 6.97a.75.75 0 1 1-1.06 1.061l-2-1.999l-.01-.01c-2.058-2.14-4.224-2.335-5.836-1.598M12 4.46C9.688 2.39 7.099 2.1 5 3.059C2.786 4.074 1.25 6.426 1.25 9.138c0 2.665 1.11 4.699 2.567 6.339c1.166 1.313 2.593 2.412 3.854 3.382c.286.22.563.434.826.642c.513.404 1.063.834 1.62 1.16c.557.325 1.193.59 1.883.59s1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16a78.6 78.6 0 0 1 .826-.642c1.26-.97 2.688-2.07 3.854-3.382c1.457-1.64 2.567-3.674 2.567-6.339c0-2.712-1.535-5.064-3.75-6.077c-2.099-.96-4.688-.67-7 1.399" clip-rule="evenodd" /></svg>
                                </ListItemPrefix>
                                WishList
                                <ListItemSuffix>
                                    <Chip
                                        value="5"
                                        size="sm"
                                        color="green"
                                        className="rounded-full"
                                    />
                                </ListItemSuffix>
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m19.5 1l-1.09 2.41L16 4.5l2.41 1.09L19.5 8l1.1-2.41L23 4.5l-2.4-1.09zM12 2C6.5 2 2 6.5 2 12v10h20V12c0-1.47-.33-2.87-.9-4.13l-1.24 2.72c.08.46.14.91.14 1.41c0 4.43-3.57 8-8 8s-8-3.57-8-8v-.13a10 10 0 0 0 5.74-5.56A10 10 0 0 0 17.5 10a10 10 0 0 0 1.33-.09l-1.48-3.26L12.6 4.5l3.53-1.6C14.87 2.33 13.47 2 12 2m-3 9.75A1.25 1.25 0 0 0 7.75 13A1.25 1.25 0 0 0 9 14.25A1.25 1.25 0 0 0 10.25 13A1.25 1.25 0 0 0 9 11.75m6 0A1.25 1.25 0 0 0 13.75 13A1.25 1.25 0 0 0 15 14.25A1.25 1.25 0 0 0 16.25 13A1.25 1.25 0 0 0 15 11.75" /></svg>
                                </ListItemPrefix>
                                Face
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="M18.8 6.4c-1.884-2.512-4.28-3.9-6.8-3.9c-2.52 0-4.916 1.388-6.8 3.9c-1.417 1.889-3.126 4.44-3.362 7.124c-.121 1.384.147 2.801 1.019 4.15c.861 1.332 2.268 2.531 4.315 3.58c1.259.645 2.63-.22 2.809-1.483a6.48 6.48 0 0 1-1.162-1.001c-1.013-1.105-1.82-2.723-1.82-4.77c0-3.428 1.77-5.735 3.9-6.344c.282-.08.6.132.634.424a5 5 0 0 0 4.917 4.42c.674.006.55 1.06.55 1.5c0 2.047-.806 3.665-1.82 4.77c-.362.396-.76.734-1.164 1.003c.16 1.268 1.518 2.14 2.778 1.531c2.165-1.044 3.643-2.243 4.538-3.585c.907-1.362 1.163-2.797 1.007-4.194c-.3-2.69-2.138-5.257-3.54-7.125Z" /></g></svg>
                                </ListItemPrefix>
                                Hair
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="m17.068 2.001l.116.013a1 1 0 0 1 .822 1.15c-.43 2.58.088 5.416 1.428 8.43c1.174 2.643.82 5.424-.455 8.064a13.59 13.59 0 0 1-.632 1.165l-.232.364a7.37 7.37 0 0 1-.306.427a1 1 0 0 1-1.65-1.124l.072-.104c.361-.503.678-1.04.947-1.598c.79-1.636 1.143-3.297.879-4.883c-1.91.469-3.041 1.307-3.753 2.35c-.813 1.19-1.175 2.786-1.305 4.79a1.004 1.004 0 0 1-1 .955c-.53 0-.975-.425-.998-.956c-.13-2.003-.492-3.598-1.305-4.79c-.708-1.036-1.829-1.87-3.717-2.34c-.261 1.583.092 3.242.88 4.874c.215.445.458.882.734 1.294l.213.304a1 1 0 0 1-1.578 1.228a7.371 7.371 0 0 1-.306-.427l-.232-.364c-.2-.328-.417-.72-.632-1.165c-1.274-2.64-1.63-5.421-.455-8.064c1.34-3.014 1.858-5.85 1.428-8.43a1 1 0 1 1 1.972-.328c.482 2.89-.04 5.971-1.4 9.174c2.197.575 3.73 1.632 4.745 3.117c.252.37.468.76.652 1.167c.184-.407.4-.797.652-1.167c1.019-1.493 2.564-2.553 4.778-3.126c-1.356-3.2-1.878-6.278-1.396-9.165A1 1 0 0 1 17.068 2ZM12 8a1 1 0 1 1 0 2a1 1 0 0 1 0-2" /></g></svg>
                                </ListItemPrefix>
                                Body
                            </ListItem>
                        </List>
                    </Drawer>
                </div>
            </div>
        </div>
    )
}



export default Header;
