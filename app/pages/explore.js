import Page from '../components/Page'
import Main from '../components/Main'
import Header from '../components/Header'
import Input from '../components/Input'
import Button from '../components/Button'

const Explore = () => (
  <Page>
    <Main>
      {/* <Header title="Home" /> */}
      <Input name="Email" type="text" />
      <Input name="Password" type="password" />
      <Button outline>Log In</Button>
      <Button>Sign Up</Button>
    </Main>
  </Page>
)

export default Explore
