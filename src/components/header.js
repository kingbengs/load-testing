import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { injectIntl, FormattedMessage } from 'react-intl'

import { Link, languages } from '../i18n'

import casparLogoMint from '../assets/caspar-logo-mint.svg'
import menuActiveIcon from '../assets/menu-active.svg'
import menuIcon from '../assets/menu.svg'
import { media } from '../shared/styles'

const Outer = styled.div`
  background-color: #ffffff;
`

const Menu = styled.div`
  max-width: 94rem;
  margin: 0 auto;
  display: flex;
  height: 100%;
  position: relative;

  flex-direction: column;
  align-items: flex-start;

  ${media.tablet`
    display: flex;
    flex-direction: row;
    align-items: center;
  `};
`

const CollapsibleMenuItems = styled.div`
  display: flex;
  position: relative;

  flex-direction: column;
  align-items: flex-start;

  ${media.tablet`
    display: flex;
    flex-direction: row;
    align-items: center;
  `};
`

const Logo = styled.img`
  height: 1.8rem;
  margin: 1.6rem 0;
`

const linkStyle = css`
  color: #000000;
  text-decoration: none;
  font-size: 1.4rem;

  ${media.tablet`
    font-size: 1.083rem;
  `};
`

const MenuItem = styled(Link)`
  ${linkStyle};
  margin: 1rem 2.5rem;

  ${media.tablet`
    margin: 0 1.25rem;
  `} &.active {
    border-bottom: 0.2rem solid #1ed9bf;
  }
`

const MenuDropdownContent = styled.div`
  display: none;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;
  background-color: #ffffff;
  position: absolute;
  left: 0;
  padding: 1rem;
  margin-top: 1.3rem;
  width: 8rem;
  text-align: left;
`

const MenuDropDown = styled.div`
  display: flex;
  position: relative;
  text-align: center;

  :hover {
    ${MenuDropdownContent} {
      ${media.tablet`
        display: flex;
      `}
    }
  }
`

const MenuDropDownItem = styled(Link)`
  ${linkStyle};
  margin: 1rem 0.5rem;
  cursor: pointer;
  display: inline-block;

  &.active {
    border-bottom: 0.2rem solid #1ed9bf;
  }
`

const MobileSubMenu = styled.div`
  display: flex;
  flex-direction: column;
  ${media.tablet`
    display: none;
  `};
`

const MobileSubMenuItem = styled(MenuDropDownItem)`
  margin: 1rem 4rem;
  align-self: flex-start;
`

const LoginMenuItem = styled.a`
  ${linkStyle};
  color: #ffffff;
  border-radius: 3rem;
  padding: 0 2rem;
  background: linear-gradient(to left, #07acab, #50d0c6);
  margin: 1rem 2.5rem;

  ${media.tablet`
    line-height: 2.25rem;
  `};
`

const LogoMenuItem = styled(Link)`
  margin-right: auto;
  margin-left: 2.5rem;
`

const BurgerMenuIcon = styled.div`
  background-image: ${(props) =>
    props.active ? `url(${menuActiveIcon})` : `url(${menuIcon})`};
  background-size: cover;
  height: 1.8rem;
  width: 1.8rem;
  position: absolute;
  right: 2rem;
  top: 1.6rem;

  ${media.tablet`
    display: none;
  `};
`

const LanguageMenuDropdown = styled.div`
  display: none;
  background-color: #ffffff;
  position: absolute;
  padding: 1rem;
  width: 4rem;
  right: -10px;
  z-index: 10;
  ${media.tablet`
    right: -28px;
  `}
`

const LanguageMenu = styled.div`
  position: relative;
  :hover {
    ${LanguageMenuDropdown} {
      display: block;
    }
  }
`

const SelectedLanguage = styled.div`
  ${linkStyle};
  margin: 1rem 2.5rem;
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
  }

  ${media.tablet`
    margin: 0 1.25rem;
  `}
`

const LanguageMenuItem = styled.div`
  color: #000000;
  margin: 1rem 0;
  cursor: pointer;
`

export class Header extends Component {
  state = {
    active: typeof window !== 'undefined' && window.innerWidth > 639,
    languages,
  }

  getLocale() {
    return this.state.languages.find(
      (language) => language.id === this.props.intl.locale
    ).title
  }

  toggle() {
    this.setState((st) => ({ ...st, active: !st.active }))
  }

  orinentationChange() {
    this.setActiveForMobile()
  }

  componentDidMount = () => {
    this.setActiveForMobile()
    window.addEventListener(
      'orientationchange',
      this.orinentationChange.bind(this)
    )
  }

  componentWillUnmount = () => {
    window.removeEventListener(
      'orientationchange',
      this.orinentationChange.bind(this)
    )
  }

  clicked() {
    if (window.screen.width < 640) {
      this.setActiveForMobile()
    }
  }

  setActiveForMobile() {
    let width
    if (window.orientation === -90 || window.orientation === 90) {
      // Landscape mode
      width = Math.max(window.screen.width, window.screen.height)
    } else {
      // Portrait mode
      width = Math.min(window.screen.width, window.screen.height)
    }
    this.setState({ active: width > 639 })
  }

  handleLanguageMenuItemClick(languageId) {
    this.props.setLocale(languageId)
  }

  render() {
    const { active, languages } = this.state
    const { intl } = this.props

    return (
      <Outer>
        <Menu>
          <LogoMenuItem onClick={this.clicked.bind(this)} to="/">
            <Logo src={casparLogoMint} />
          </LogoMenuItem>
          <BurgerMenuIcon active={active} onClick={this.toggle.bind(this)} />
          {active && (
            <CollapsibleMenuItems>
              <MenuItem
                onClick={this.clicked.bind(this)}
                activeClassName="active"
                to="/product/"
              >
                <FormattedMessage id="navbar.product" />
              </MenuItem>
              {intl.locale === 'de' ? (
                <>
                  <MenuDropDown>
                    <MenuItem as="span">
                      <FormattedMessage id="navbar.clients" />
                    </MenuItem>
                    <MenuDropdownContent>
                      <MenuDropDownItem
                        onClick={this.clicked.bind(this)}
                        activeClassName="active"
                        to="/institutions/"
                      >
                        <FormattedMessage id="navbar.clients.institutions" />
                      </MenuDropDownItem>
                      <MenuDropDownItem
                        onClick={this.clicked.bind(this)}
                        activeClassName="active"
                        to="/patients/"
                      >
                        <FormattedMessage id="navbar.clients.patients" />
                      </MenuDropDownItem>
                    </MenuDropdownContent>
                  </MenuDropDown>
                  <MobileSubMenu>
                    <MobileSubMenuItem
                      onClick={this.clicked.bind(this)}
                      activeClassName="active"
                      to="/institutions/"
                    >
                      <FormattedMessage id="navbar.clients.institutions" />
                    </MobileSubMenuItem>
                    <MobileSubMenuItem
                      onClick={this.clicked.bind(this)}
                      activeClassName="active"
                      to="/patients/"
                    >
                      <FormattedMessage id="navbar.clients.patients" />
                    </MobileSubMenuItem>
                  </MobileSubMenu>
                  <MenuDropDown>
                    <MenuItem as="span">
                      <FormattedMessage id="navbar.about-us" />
                    </MenuItem>
                    <MenuDropdownContent>
                      <MenuDropDownItem
                        onClick={this.clicked.bind(this)}
                        activeClassName="active"
                        to="/about-us/"
                      >
                        <FormattedMessage id="navbar.team" />
                      </MenuDropDownItem>
                      <MenuDropDownItem
                        onClick={this.clicked.bind(this)}
                        activeClassName="active"
                        partiallyActive
                        to="/press/"
                      >
                        <FormattedMessage id="navbar.press" />
                      </MenuDropDownItem>
                      <MenuDropDownItem
                        onClick={this.clicked.bind(this)}
                        activeClassName="active"
                        to="/career/"
                      >
                        <FormattedMessage id="navbar.career" />
                      </MenuDropDownItem>
                    </MenuDropdownContent>
                  </MenuDropDown>
                  <MobileSubMenu>
                    <MobileSubMenuItem
                      onClick={this.clicked.bind(this)}
                      activeClassName="active"
                      to="/about-us/"
                    >
                      <FormattedMessage id="navbar.team" />
                    </MobileSubMenuItem>
                    <MobileSubMenuItem
                      onClick={this.clicked.bind(this)}
                      activeClassName="active"
                      to="/press/"
                    >
                      <FormattedMessage id="navbar.press" />
                    </MobileSubMenuItem>
                    <MobileSubMenuItem
                      onClick={this.clicked.bind(this)}
                      activeClassName="active"
                      to="/career/"
                    >
                      <FormattedMessage id="navbar.career" />
                    </MobileSubMenuItem>
                  </MobileSubMenu>
                  <MenuItem
                    onClick={this.clicked.bind(this)}
                    activeClassName="active"
                    partiallyActive
                    to="/blog/"
                  >
                    Blog
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem
                    onClick={this.clicked.bind(this)}
                    activeClassName="active"
                    to="/institutions/"
                  >
                    <FormattedMessage id="navbar.clients" />
                  </MenuItem>
                  <MenuDropDown>
                    <MenuItem as="span">
                      <FormattedMessage id="navbar.about-us" />
                    </MenuItem>
                    <MenuDropdownContent>
                      <MenuDropDownItem
                        onClick={this.clicked.bind(this)}
                        activeClassName="active"
                        to="/about-us/"
                      >
                        <FormattedMessage id="navbar.team" />
                      </MenuDropDownItem>
                      <MenuDropDownItem
                        onClick={this.clicked.bind(this)}
                        activeClassName="active"
                        to="/career/"
                      >
                        <FormattedMessage id="navbar.career" />
                      </MenuDropDownItem>
                    </MenuDropdownContent>
                  </MenuDropDown>
                  <MobileSubMenu>
                    <MobileSubMenuItem
                      onClick={this.clicked.bind(this)}
                      activeClassName="active"
                      to="/about-us/"
                    >
                      <FormattedMessage id="navbar.team" />
                    </MobileSubMenuItem>
                    <MobileSubMenuItem
                      onClick={this.clicked.bind(this)}
                      activeClassName="active"
                      to="/career/"
                    >
                      <FormattedMessage id="navbar.career" />
                    </MobileSubMenuItem>
                  </MobileSubMenu>
                </>
              )}
              <MenuItem
                onClick={this.clicked.bind(this)}
                href="https://casparhealthonlineseminar.teachable.com/p/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FormattedMessage id="navbar.seminar" />
              </MenuItem>
              <MenuItem
                onClick={this.clicked.bind(this)}
                activeClassName="active"
                to="/contact/"
              >
                <FormattedMessage id="navbar.contact" />
              </MenuItem>
              <LanguageMenu>
                <SelectedLanguage>{this.getLocale()}</SelectedLanguage>
                <LanguageMenuDropdown>
                  {languages.map((language) => (
                    <LanguageMenuItem
                      key={language.id}
                      onClick={this.handleLanguageMenuItemClick.bind(
                        this,
                        language.id
                      )}
                    >
                      {language.title}
                    </LanguageMenuItem>
                  ))}
                </LanguageMenuDropdown>
              </LanguageMenu>
              <LoginMenuItem
                onClick={this.clicked.bind(this)}
                target="_blank"
                href={'https://app.caspar-health.com/' + intl.locale}
              >
                <FormattedMessage id="navbar.login" defaultMessage="Login" />
              </LoginMenuItem>
            </CollapsibleMenuItems>
          )}
        </Menu>
      </Outer>
    )
  }
}

export default injectIntl(Header)
