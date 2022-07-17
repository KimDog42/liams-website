import React from 'react';
import { Modal, Input, Row, Checkbox, Button, Text, Tooltip } from "@nextui-org/react"

function Profile() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div>


        <div>
          <Tooltip placement="bottom" content="Sign In">
             <Button auto color="gradient" shadow onClick={handler}>
        Sign In
      </Button>
          </Tooltip>
      <Modal
        closeButton
        preventClose
        animated={false}
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Sign In
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
          />
          <Row justify="space-between">
            <Checkbox  defaultSelected={true}>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
          
          <div className="flex justify-center pl-0">
            <Text size={18} >Login With Our Other Providers</Text>
          </div>
          
          <div className="flex items-center space-x-5 justify-center">
            <a href="/Profile/Login/Providers">
            <img 
          className="h-10 w-10 cursor-pointer"
          src="https://cdn.discordapp.com/attachments/881019698874032220/996475652050014208/5847f9cbcef1014c0b5e48c8.png"/>
          </a>

          <a href="/Profile/Login/Providers">
            <img 
          className="h-10 w-10 cursor-pointer"
          src="https://cdn.discordapp.com/attachments/881019698874032220/996525388085870682/GitHub-Mark-64px.png"/>
          </a>

          <a href="/Profile/Login/Providers">
            <img 
          className="h-10 w-10 cursor-pointer"
          src="https://cdn.discordapp.com/attachments/881019698874032220/996526535001522308/image-microsoft-logo--5.png"/>
          </a>

          <a href="/Profile/Login/Providers">
            <img 
          className="h-10 w-10 cursor-pointer"
          src="https://cdn.discordapp.com/attachments/881019698874032220/998333670169510019/reddit-logo.png"/>
          </a>

          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={closeHandler}>
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
  )
}

export default Profile