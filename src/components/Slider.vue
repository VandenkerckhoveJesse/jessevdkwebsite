<template>
    <div>
        <!-- Nav Links -->
        <div ref="slider" class="navMenu" :style="[menuDirection, menuWidth]">
            <a href="javascript:void(0)" class="closebtn" @click="closeMenu()">&times;</a>
            <router-link to="/" @click.native="closeMenu()">Home</router-link>
            <router-link to="/about" @click.native="closeMenu()">About</router-link>
            <router-link to="/projects" @click.native="closeMenu()"">Projects</router-link>
            <router-link to="/skills" @click.native="closeMenu()">Skills</router-link>
            <router-link to="/cv" @click.native="closeMenu()">CV</router-link>
            <router-link to="/contact" @click.native="closeMenu()">Contact</router-link>
        </div>
        <!-- Hamburger Menu -->
        <nav ref="menuIcon" class="navIcon" :style="iconDirection">
            <a href="javascript:void(0)" @click="toggleMenu()" data-test-ref="navMenuLink">
                <svg width="30" height="30">
                    <path d="M0,5 30,5" :stroke="styles['menu-icon-color']" stroke-width="5"/>
                    <path d="M0,14 30,14" :stroke="styles['menu-icon-color']" stroke-width="5"/>
                    <path d="M0,23 30,23" :stroke="styles['menu-icon-color']" stroke-width="5"/>
                </svg>
            </a>
        </nav>
    </div>
</template>

<script>
    import styles from '@/assets/sass/variables.scss'
    import utilities from '@/assets/js/utilities'
    export default {
        name: 'slider',
        props: {
            width: {
                type: Number,
                required: false,
                default: 250
            },
            format: {
                type: String,
                required: false,
                default: 'overlay'
            },
            direction: {
                type: String,
                required: false,
                default: 'left'
            },
            opacity: {
                type: Number,
                required: false,
                default: 0
            }
        },
        data () {
            return {
                styles: styles,
                menuWidth: {
                    'width': 0
                }
            }
        },
        computed: {
            menuDirection () {
                return this.direction === 'right' ? { 'right': 0 } : { 'left': 0 }
            },
            iconDirection () {
                return this.direction === 'right' ? { 'float': 'right' } : { 'float': 'left' }
            },
            app () {
                return document.getElementById('app')
            }
        },
        methods: {
            openMenu () {
                this.setFormat()
            },
            setFormat () {
                const width = this.width.toString() + 'px'
                if (this.format === 'overlay') {
                    this.menuWidth = { 'width': width }
                } else if (this.format === 'full') {
                    this.menuWidth = { 'width': '100%' }
                } else {
                    this.menuWidth = { 'width': width }
                    if (this.app) {
                        if (this.direction === 'right') {
                            this.app.style.marginRight = width
                            this.app.style.transition = 'margin-right .5s'
                        } else {
                            this.app.style.marginLeft = width
                            this.app.style.transition = 'margin-left .5s'
                        }
                    } else {
                        console.warn(`[Slider] The format was set to '${this.format}', but there is no element with an id 'app'. Add id='app' to the element to move.`)
                    }
                }
            },
            closeMenu () {
                console.log("close");
                this.menuWidth = { 'width': 0 }
                if (this.app) {
                    this.app.style.marginLeft = '0'
                    this.app.style.marginRight = '0'
                }
                if (this.opacity) {
                    document.body.style.backgroundColor = styles['background-color']
                }
            },
            toggleMenu () {
                if (this.menuWidth.width === 0) {
                    this.openMenu()
                } else {
                    this.closeMenu()
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/sass/variables.scss';
    body {
        transition: background-color .5s;
    }
    #app {
        transition: margin-left .5s;
        transition: margin-right .5s;
        padding: 20px;
    }
    .navMenu {

        height: 100%;
        width: 0;
        position: fixed;
        z-index: 1;
        top: 0;
        background-color: #38d39f;
        overflow-x: hidden;
        padding-top: 60px;
        transition: 0.5s;
    a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: $menu-text;
        display: block;
        transition: 0.3s;
    &:hover {
         color: $menu-text-hover;
     }
    }
    .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
    }
    }
    @media screen and (max-height: 450px) {
        .navMenu {
            padding-top: 15px;
        a {
            font-size: 18px;
        }
    }
    }
</style>