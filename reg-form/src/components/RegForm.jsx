import React, { Component } from 'react'
import axios from 'axios'
import ReactCountryFlag from 'react-country-flag'
import '../styles/form.css'

export default class RegForm extends Component {
  state = {
    sendable: false,
    email: '',
    tel: '',
    pass: '',
    conf_pass: '',
    country_code: '',
    email_valid: false,
    tel_valid: false,
    pass_valid: false,
    policy: false
  }

  isInputValid = inp => {
    if (inp.target && inp.target.type === 'email') {
      const email = inp.target.value
      if (this.validateEmail(email)) {
        axios
          .get('http://apilayer.net/api/check?access_key=e4338c17e5fdcd08894e951bda8f0d10&email=' + email)
          .then(res => {
            if (res.data.score >= (process.env.REACT_APP_SCORE || 0.5) && !res.data.disposable) 
              this.setState({ email_valid: true, email })
            else this.setState({ email_valid: false, email })
          })
      } else this.setState({ email_valid: false, email })
    } else if (inp.target && inp.target.type === 'text') {
      const tel = inp.target.value
      
      if (this.validateTel(tel)) {
        axios
          .get('http://apilayer.net/api/validate?access_key=a0662d017c4f4c1311d6a30092007e83&number=' + tel)
          .then(res => {
            if (res.data.valid) this.setState({ tel_valid: true, tel: res.data.international_format, country_code: res.data.country_code })
            else this.setState({ tel_valid: false, tel })
          })
      } else this.setState({ tel_valid: false, tel })
    } else if (inp.target && inp.target.type === 'password') {
      const pass = inp.target.value
      if (this.validatePass(pass)) this.setState({ pass_valid: true, pass })
      else this.setState({ pass_valid: false, pass })
    }
  }

  validateEmail = e => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    return re.test(e)
  }

  validateTel = t => {
    const re = /^\d+$/
    return re.test(t)
  }

  validatePass = p => {
    if (p.length >= 6) {
      const spec_chars = '*|,":<>[]{}`\';()@&$#%'
      let nums = 0
      let big_letters = 0
      let spec = 0

      for (let i = 0; i < p.length; i++) {
        if (Number(p[i])) nums++
        else if (spec_chars.indexOf(p[i]) !== -1) spec++
        else if (p[i].toUpperCase() === p[i]) big_letters++

        // Проверка на последовательность цифр или букв (например, 3456 или abcd)
        if (p[i + 3] && p[i + 2] && p[i + 1]) {
          if (p[i].charCodeAt() - p[i + 1].charCodeAt() - p[i + 2].charCodeAt() - p[i + 3].charCodeAt() === p[i + 3].charCodeAt() * -2 ) 
            return false
        }
      }

      return nums >= 2 && big_letters >= 1 && spec >= 1
    } else return false
  }

  checkHandler = () => {
    this.setState({ policy: !this.state.policy })
  }

  confPassHandler = p => this.setState({ conf_pass: p.target.value })

  validateForm = () => {
    const { email_valid, tel_valid, pass_valid, policy } = this.state

    if (email_valid && tel_valid && pass_valid && policy) {
      this.setState({ sendable: true })
    } else this.setState({ sendable: false })
  }

  submit = e => {
    e.preventDefault()
    const { sendable, pass, tel, email } = this.state

    if (sendable) {
      alert(`Email - ${email}\nPassword - ${pass}\nPhone - ${tel}`)
    }
  }

  render() {
    return (
      <div className="form_container">
        <div className="form">  
          <div className="form_header">
            <p>РЕГИСТРАЦИЯ</p>
          </div>
          <form onSubmit={this.submit} onChange={this.validateForm}>
            <div className="el">
              <label className="text_input">
                <p>E-mail</p>
                <input
                  type="email"
                  className={this.state.email_valid ? 'good' : this.state.email === '' ? '' : 'bad'}
                  onBlur={this.isInputValid}
                  required
                />
              </label>
            </div>
            <div className="el">
              <label className="text_input">
                <p>Phone number</p>
                <div className={this.state.tel_valid ? 'good' : this.state.tel === '' ? '' : 'bad'}>
                  <ReactCountryFlag
                    styleProps={{
                      width: '20px',
                      height: '22px'
                    }}
                    code={this.state.country_code}
                    svg
                  />
                  <input
                    type="text"
                    onBlur={this.isInputValid}
                    required
                  />
                </div>
              </label>
            </div>
            <div className="el">
              <label className="text_input">
                <p>Password<span>?<span className="tooltiptext">Password <br/>(!@#$%^&*(),.) <br/>abcde 1-A 2-a <br/>123 <span></span> </span></span></p>
                <input
                  type="password"
                  className={this.state.pass_valid ? 'good' : this.state.pass === '' ? '' : 'bad'}
                  onBlur={this.isInputValid}
                  required
                />
              </label>
            </div>
            <div className="el">
              <label className="text_input">
                <p>Confirm Password</p>
                <input
                  type="password"
                  className={this.state.conf_pass === this.state.pass && this.state.conf_pass !== ''
                    ? 'good'
                    : this.state.conf_pass === '' ? '' : 'bad'
                  }
                  onBlur={this.confPassHandler}
                  required
                />
              </label>
            </div>
            <div className="el">
              <label className="check">
                <input
                  type="checkbox"
                  onChange={this.checkHandler}
                  required
                />
                <span>I accept privacy policy and it's so cool</span>
              </label>
            </div>
            <div className="el">
              <input
                type="submit"
                value="Subscribe"
                className={this.state.sendable ? 'sendable' : 'not_sendable'}
              />
            </div>
          </form>
        </div>
      </div>
    )
  }
}