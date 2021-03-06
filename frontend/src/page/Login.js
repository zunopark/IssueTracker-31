import React from 'react'
import styled from 'styled-components'
import Request from '../util/request'
import GithubIcon from '../../public/js/GithubIcon'

function LoginForm() {
  const [value, setValue] = React.useState({
    nickname: '',
    password: '',
  })

  const handleSubmit = () => {}

  const handleChange = event => {
    setValue({ ...value, [event.target.name]: event.target.value })
  }

  const handleGithubLogin = async () => {
    try {
      const res = await Request.GET('/users/github')
      window.location.href = res
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Wrapper>
      <TextHeader>이슈 트래커</TextHeader>
      <LoginWrapper>
        <LabelLogin>아이디</LabelLogin>
        <IdInputContainer
          type="text"
          name="nickname"
          value={value.nickname}
          onChange={handleChange}
          required
        />
        <LabelLogin>비밀번호</LabelLogin>
        <PasswordInputContainer
          type="password"
          name="password"
          value={value.password}
          onChange={handleChange}
          required
        />
        <SubmitContainer>
          <LoginButton onClick={handleSubmit}>로그인</LoginButton>
          <SignInButton>회원가입</SignInButton>
        </SubmitContainer>
        <BtnGithub>
          <Button onClick={handleGithubLogin}>
            Sign in with GitHub
            <GithubIcon />
          </Button>
        </BtnGithub>
      </LoginWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
  border-radius: 0.3rem !important;
`
const TextHeader = styled.h1`
  font-size: 2rem;
  color: black;
`
const LoginWrapper = styled.form`
  height: 250px;
  width: 400px;
  display: flex;
  background-color: #f8f8ff;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  border: 1px solid #d3d3d3;
  border-radius: 0.3rem !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`

const LabelLogin = styled.label`
  margin-bottom: -10px;
  font-weight: bold;
`
const IdInputContainer = styled.input`
  height: 30px;
  border-radius: 0.3rem !important;
  border: 0px solid;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.34);
`
const PasswordInputContainer = styled.input`
  height: 30px;
  border-radius: 0.3rem !important;
  border: 0px solid;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.34);
`

const SubmitContainer = styled.div`
  display: flex;
  justify-content: space-around;
`
const LoginButton = styled.a`
  cursor: pointer;
`
const SignInButton = styled.a`
  cursor: pointer;
`
const BtnGithub = styled.div`
  cursor: pointer;
  text-align: center;
  color: #fff;
  background-color: #a9a9a9;
  height: 30px;
  padding: 5px;
  font-weight: bold;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`
const Button = styled.div``

export default LoginForm
