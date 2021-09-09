import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { graphql } from 'gatsby'
import Recaptcha from 'react-google-recaptcha'

import axios from 'axios'

import Layout from '../components/layout'

import {
  SectionTitle,
  LargeButton,
  grayText,
  SectionSubtitle,
  media,
  SectionContent,
} from '../shared/styles'
import { FormattedMessage, injectIntl } from 'react-intl'
import { withIntl } from '../i18n'
import ClientBubbles from '../components/client-bubbles'
import ContactUs from '../components/contact-us'

const Outher = styled.div``

const ContactBox = styled.div`
  margin-bottom: 2rem;
  padding: 2rem;
  background-color: #edf9f8;

  ${media.tablet`
    display: flex;
    flex-direction: column;
    height: 1%;
    padding: 2rem 1rem;
    width: calc(30% - 4rem);
  `};
`

const DemoSectionTitle = styled(SectionTitle.withComponent('h1'))`
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2.5rem;
`

const DemoSectionSubtitle = styled(SectionSubtitle)`
  max-width: calc(60% - 1rem);
  text-align: unset;
  display: flex;
  flex-direction: column;

  ${media.tablet`
    max-width: unset;
    text-align: center;
  `}
`

const DemoTelephoneNumber = styled.a`
  font-size: 1.25rem;
  margin: 0;
  text-decoration: none;
  ${grayText}
`

const DemoOfficeEmail = styled.a`
  text-decoration: none;
  font-size: 1rem;
  color: inherit;
  word-break: break-all;
`

const DemoOfficeContactPerson = styled.div`
  margin-top: 1rem;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const DemoContactContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const BubbleSection = styled.div`
  background-color: #d9e6e4;
  padding: 3rem 0 0 0;
  overflow: auto;
`

const ContactPersonMobile = styled.img`
  width: 40%;
  display: block;
  margin-right: 1rem;

  ${media.tablet`
    display: none;
  `}
`

const ContactPersonDesktop = styled.img`
  width: 75%;
  display: none;
  ${media.tablet`
    display: block;
  `}
`

const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: none;

  ${media.tablet`
    display: flex;
    margin-bottom: 1rem;
  `}
`

const RequestDemoForm = styled.form`
  margin: 3rem 0 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const FormFields = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;

  ${media.tablet`
    flex-direction: row;
  `}
`

const FormControls = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 2rem 0 0;
  width: 100%;

  ${media.desktop`
  flex-direction: row;
  justify-content: space-around;
`}
`

const Label = styled.label`
  font-size: 1.25rem;
  ${grayText};
`

const inputStyle = css`
  height: 2.92rem;
  font-size: 1.25rem;
  border: 0;
  border-radius: 0;
  outline: 1px inset #4f4f4f;
  outline-offset: -1px;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 1rem;
  box-shadow: none;
  ${grayText};
`

const SectionPaddedContent = styled(SectionContent)`
  padding: 0 2rem;
`

const Input = styled.input`
  ${inputStyle};
`

const Select = styled.select`
  ${inputStyle};
  background-color: white;
`

const TextArea = styled.textarea`
  ${inputStyle};
  height: 15rem;
  box-sizing: border-box;
  resize: vertical;
`

const Message = styled.div`
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
  height: 100%;
  font-size: 1.2rem;
`

const ErrorMessage = styled(Message)`
  color: red;
`

const SuccessMessage = styled(Message)`
  color: #4f4f4f;
`

const ContactHeader = styled.div`
  margin-bottom: 3rem;
  background-color: #edf9f8;
  display: flex;
  justify-content: center;
`

const FormButton = styled(LargeButton)`
  width: 45%;
  padding: 0 1rem;
  margin: 0 0 1rem;
`

const FormContactSection = styled(SectionPaddedContent)`
  display: flex;
  flex-direction: column;

  ${media.tablet`
    flex-direction: row-reverse;
  `}
`

const FormExplainerSection = styled.div`
  ${media.tablet`
    width: 70%;
    margin-right: 4rem;
  `}
`

const ContactBoxClipart = styled.img`
  display: none;
  width: 50%;
  margin-top: 3rem;

  ${media.tablet`
    display: block;
  `};
`

const LabelInputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${media.tablet`
    width: 47.5%;
  `}
`

const ShortLabelInputWrapper = styled(LabelInputWrapper)`
  width: 70%;
`

const LongLabelInputWrapper = styled(LabelInputWrapper)`
  ${media.tablet`
    width: 100%;
  `}
`

const ContactOptionWrapper = styled.div`
  display: flex;
  max-width: 78rem;
  flex-wrap: wrap;
  margin: 2rem 0;
  justify-content: center;
  ${media.tablet`
    justify-content: space-between;
    margin: 6rem 0 4rem;
    padding: 0 2rem
  `}
`
const ContactOption = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-decoration: none;
  width: 75%;
  padding: 1rem;
  border-style: solid;
  border-width: 1px;
  ${props =>
    props.activeSection ? `border-color: black` : `border-color: #edf9f8`};

  ${media.tablet`
    width: 28%;
  `}
  :hover {
    cursor: pointer;
  }
`
const ContactOptionImage = styled.img`
  height: 6rem;
  margin-bottom: 1rem;
`
const ContactOptionTitle = styled.span`
  font-size: 2rem;
  font-weight: 600;
  ${grayText}
`
const ContactOptionSubtitle = styled(SectionSubtitle)`
  margin: 1rem 0;
  flex-grow: 1;
  width: 100%;
`
const ContactOptionNumber = styled.span`
  font-size: 2rem;
  ${grayText}
`

const ContactOptionCard = ({ activeSection, handleSectionChange, option }) => (
  <ContactOption
    href="#formsection"
    activeSection={activeSection === option}
    onClick={() => handleSectionChange(option)}
  >
    <ContactOptionImage src={getImageLinkForOption(option)} />
    <ContactOptionTitle>
      <FormattedMessage id={`contact.${option}.box.title`} />
    </ContactOptionTitle>
    <ContactOptionSubtitle>
      <FormattedMessage id={`contact.${option}.box.subtitle`} />
    </ContactOptionSubtitle>
    <ContactOptionNumber>
      <FormattedMessage id={`contact.${option}.contact-box.number`} />
    </ContactOptionNumber>
  </ContactOption>
)

const getImageLinkForOption = option => {
  switch (option) {
    case 'office':
      return 'https://caspar-assets.s3.eu-central-1.amazonaws.com/Contact-Us/Support-icon.svg'
    case 'customer':
      return 'https://caspar-assets.s3.eu-central-1.amazonaws.com/Contact-Us/Kundenbetreuung-icon.svg'
    case 'patients':
      return 'https://caspar-assets.s3.eu-central-1.amazonaws.com/Contact-Us/Patienten-icon.svg'
    default:
      return 'https://caspar-assets.s3.eu-central-1.amazonaws.com/Contact-Us/Kundenbetreuung-icon.svg'
  }
}

export class DemoPage extends Component {
  constructor(props) {
    super(props)
    const activeSection = ['customer', 'office', 'patients'].filter(section => section === props.location.search.split('=')[1])
    this.handleVerify = this.handleVerify.bind(this);
    this.state = {
      formData: {
        salutation: undefined,
        title: '',
        last_name: '',
        first_name: '',
        company: '',
        email: '',
        phone: '',
        inquiry: '',
        content: '',
        to: 'office',
      },
      loading: false,
      submitted: false,
      error: false,
      verified: false,
      activeSection: activeSection.length > 0 ? activeSection[0] : 'office',
    }
  }

  handleSubmit = $event => {
    $event.preventDefault()
    if(this.state.verified){
    this.setState({ loading: true })
    let formData = this.state.formData
    formData.locale = this.props.intl.locale
      axios
        .post(
          'https://4m912mp8c8.execute-api.eu-west-1.amazonaws.com/prod/contact',
          this.state.formData
        )
        .then(
          success => {
            this.setState({ ...this.state, loading: false, submitted: true })
          },
          error => {
            this.setState({
              ...this.state,
              loading: false,
              submitted: true,
              error: true,
          })
        }
      )
    }
    else {
      let formData = this.state.formData
      formData.locale = this.props.intl.locale
      this.setState({ ...this.state, loading: false, submitted: false })
    }
  }

  handleChange(event) {
    const change = {}
    change[event.target.name] = event.target.value
    this.setState({
      ...this.state,
      formData: { ...this.state.formData, ...change },
    })
  }

  handleSectionChange(newSection) {
    const to = newSection === 'patients' ? 'patients-care' : 'office'
    this.setState(state => ({
      formData: { ...state.formData, to: to },
      activeSection: newSection,
    }))
  }

  handleVerify() {
    this.setState({ ...this.state, verified: true })
  }

  buildNumberString(numberString) {
    return 'tel:' + numberString.replace(/ *\([^)]*\) * |\s/g, '')
  }

  render() {
    const { formData, loading, submitted, error, activeSection } = this.state
    const { intl, data } = this.props

    return (
      <Layout
        setLocale={this.props.setLocale}
        originalPath={this.props.pageContext.originalPath}
      >
        <Outher>
          <ContactHeader>
            <ContactOptionWrapper>
              <ContactOptionCard
                activeSection={activeSection}
                handleSectionChange={this.handleSectionChange.bind(this)}
                option="office"
              />
              <ContactOptionCard
                activeSection={activeSection}
                handleSectionChange={this.handleSectionChange.bind(this)}
                option="customer"
              />
              <ContactOptionCard
                activeSection={activeSection}
                handleSectionChange={this.handleSectionChange.bind(this)}
                option="patients"
              />
            </ContactOptionWrapper>
          </ContactHeader>
          <FormContactSection id="formsection">
            <ContactBox>
              <ImageWrapper>
                <ContactPersonDesktop
                  src={intl.formatMessage({
                    id: `contact.${activeSection}.contact-box.image`,
                  })}
                />
              </ImageWrapper>
              <DemoSectionTitle center>
                <FormattedMessage
                  id={`contact.${activeSection}.contact-box.title`}
                  values={{ br: <br /> }}
                />
              </DemoSectionTitle>
              <DemoContactContainer>
                <ContactPersonMobile
                  src={intl.formatMessage({
                    id: `contact.${activeSection}.contact-box.image`,
                  })}
                />
                <DemoSectionSubtitle center>
                  <DemoTelephoneNumber
                    href={this.buildNumberString(
                      intl.formatMessage({
                        id: `contact.${activeSection}.contact-box.number`,
                      })
                    )}
                  >
                    <FormattedMessage
                      id={`contact.${activeSection}.contact-box.number`}
                    />
                  </DemoTelephoneNumber>
                  <DemoOfficeEmail
                    href={
                      'mailto:' +
                      intl.formatMessage({
                        id: `contact.${activeSection}.contact-box.mail`,
                      })
                    }
                  >
                    <FormattedMessage
                      id={`contact.${activeSection}.contact-box.mail`}
                    />
                  </DemoOfficeEmail>
                  <DemoOfficeContactPerson>
                    <FormattedMessage
                      id={`contact.${activeSection}.contact-person.line1`}
                    />
                    <FormattedMessage
                      id={`contact.${activeSection}.contact-person.line2`}
                      values={{ br: <br /> }}
                    />
                  </DemoOfficeContactPerson>
                </DemoSectionSubtitle>
              </DemoContactContainer>
              <ImageWrapper>
                <ContactBoxClipart src="https://s3.eu-central-1.amazonaws.com/caspar-assets/demo/icon-1.png" />
              </ImageWrapper>
            </ContactBox>
            <FormExplainerSection>
              {!submitted && (
                <div>
                  <RequestDemoForm
                    ref={form => {
                      this.form = form
                    }}
                    onSubmit={this.handleSubmit.bind(this)}
                  >
                    <FormFields>
                      <ShortLabelInputWrapper>
                        <Label>
                          <FormattedMessage id="contact.form.gender" /> *
                        </Label>
                        <Select
                          value={formData.salutation}
                          onChange={this.handleChange.bind(this)}
                          required
                          name="salutation"
                        >
                          <option />
                          <option value="male">
                            {this.props.intl.formatMessage({
                              id: 'contact.form.gender.male',
                            })}
                          </option>
                          <option value="female">
                            {this.props.intl.formatMessage({
                              id: 'contact.form.gender.female',
                            })}
                          </option>
                        </Select>
                      </ShortLabelInputWrapper>
                      <ShortLabelInputWrapper>
                        <Label htmlFor="title">
                          <FormattedMessage id="contact.form.title" />
                        </Label>
                        <Input
                          value={formData.title}
                          onChange={this.handleChange.bind(this)}
                          type="text"
                          id="title"
                          name="title"
                        />
                      </ShortLabelInputWrapper>
                      <LabelInputWrapper>
                        <Label htmlFor="last_name">
                          <FormattedMessage id="contact.form.last-name" /> *
                        </Label>
                        <Input
                          value={formData.last_name}
                          onChange={this.handleChange.bind(this)}
                          type="text"
                          id="last_name"
                          name="last_name"
                          required
                        />
                      </LabelInputWrapper>
                      <LabelInputWrapper>
                        <Label htmlFor="first_name">
                          <FormattedMessage id="contact.form.first-name" /> *
                        </Label>
                        <Input
                          value={formData.first_name}
                          onChange={this.handleChange.bind(this)}
                          type="text"
                          id="first_name"
                          name="first_name"
                          required
                        />
                      </LabelInputWrapper>
                      <LabelInputWrapper>
                        <Label htmlFor="company">
                          <FormattedMessage
                            id={
                              activeSection !== 'patients'
                                ? 'contact.form.company'
                                : 'contact.form.institution'
                            }
                          />{' '}
                          *
                        </Label>
                        <Input
                          value={formData.company}
                          onChange={this.handleChange.bind(this)}
                          type="text"
                          id="company"
                          name="company"
                          required
                        />
                      </LabelInputWrapper>
                      <LabelInputWrapper>
                        <Label htmlFor="email">
                          <FormattedMessage id="contact.form.email" /> *
                        </Label>
                        <Input
                          value={formData.email}
                          onChange={this.handleChange.bind(this)}
                          type="email"
                          id="email"
                          name="email"
                          required
                        />
                      </LabelInputWrapper>
                      <LabelInputWrapper>
                        <Label htmlFor="phone">
                          <FormattedMessage id="contact.form.phone" />
                        </Label>
                        <Input
                          value={formData.tel}
                          onChange={this.handleChange.bind(this)}
                          type="tel"
                          id="phone"
                          name="phone"
                        />
                      </LabelInputWrapper>
                      {activeSection !== 'patients' && (
                        <LongLabelInputWrapper>
                          <Label>
                            <FormattedMessage id="contact.form.subject" /> *
                          </Label>
                          <Select
                            value={formData.inquiry}
                            onChange={this.handleChange.bind(this)}
                            name="inquiry"
                            required
                          >
                            <option value="mr">
                              {this.props.intl.formatMessage({
                                id: 'contact.form.subject.mr',
                              })}
                            </option>
                            <option value="therapeut">
                              {this.props.intl.formatMessage({
                                id: 'contact.form.subject.therapeut',
                              })}
                            </option>
                            <option value="clinic">
                              {this.props.intl.formatMessage({
                                id: 'contact.form.subject.clinic',
                              })}
                            </option>
                            {activeSection !== 'customer' && (
                              <option value="journalist">
                                {this.props.intl.formatMessage({
                                  id: 'contact.form.subject.journalist',
                                })}
                              </option>
                            )}
                            <option value="other">
                              {this.props.intl.formatMessage({
                                id: 'contact.form.subject.other',
                              })}
                            </option>
                          </Select>
                        </LongLabelInputWrapper>
                      )}
                      <LongLabelInputWrapper>
                        <Label>
                          <FormattedMessage id="contact.form.message" /> *
                        </Label>
                        <TextArea
                          name="content"
                          value={formData.content}
                          onChange={this.handleChange.bind(this)}
                          placeholder= {activeSection !== 'patients' && intl.locale === 'de' ? 'Ich habe Interesse an der Caspar-Plattform. Bitte nehmen Sie Kontakt mit mir auf.' : '' }
                          required
                        />
                      </LongLabelInputWrapper>
                    </FormFields>
                    <FormControls>
                      <FormButton disabled={loading} type="submit">
                        <FormattedMessage id="contact.form.submit" />
                      </FormButton>
                        <Recaptcha
                          sitekey="6LeTtykaAAAAAFHcxnzA__WrlBIoxKHyYYjgOyGm"
                          onChange={this.handleVerify}
                          required
                        />
                      </FormControls>
                  </RequestDemoForm>
                </div>
              )}
              {submitted && error && (
                <ErrorMessage>
                  <FormattedMessage id="contact.form.error" />
                </ErrorMessage>
              )}
              {submitted && !error && (
                <SuccessMessage>
                  <FormattedMessage id="contact.form.success.line1" />
                  <br />
                  <FormattedMessage id="contact.form.success.line2" />
                </SuccessMessage>
              )}
            </FormExplainerSection>
          </FormContactSection>
          <BubbleSection>
            <SectionContent>
              <ClientBubbles
                posts={
                  data.markdownRemark.frontmatter[intl.locale.replace('-', '')]
                }
              />
            </SectionContent>
          </BubbleSection>
          <ContactUs linksOnly withoutTopSpacing />
        </Outher>
      </Layout>
    )
  }
}

export default withIntl(injectIntl(DemoPage))

export const pageQuery = graphql`
  query bubbleContentQuery {
    markdownRemark(fileAbsolutePath: { regex: "/demo-bubble-content/" }) {
      frontmatter {
        de {
          title
          subtitle
          content
          image
        }
        en {
          title
          subtitle
          content
          image
        }
        zhHans {
          title
          subtitle
          content
          image
        }
        zhHant {
          title
          subtitle
          content
          image
        }
      }
    }
  }
`
