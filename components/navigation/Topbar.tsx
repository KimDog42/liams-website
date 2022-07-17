import React from 'react';
import {
    HomeIcon,
    SearchIcon,
    UserGroupIcon,
    CogIcon,
    ShoppingBagIcon,
} from "@heroicons/react/solid"
import Profile from '../Profile';
import { Modal, Input, Row, Checkbox, Button, Text, Tooltip } from "@nextui-org/react";

function Topbar() {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
      setVisible(false);
      console.log("closed");
    };
  return (
    <div>

        <div className="text-white flex flex-row justify-start p-5 space-x-5">
        <Profile/>
            <a href="/">
              <Tooltip placement="bottom" content="Home">
            <HomeIcon className="h-10 hover:bg-indigo-500 rounded cursor-pointer space-x-5"/>
            </Tooltip>
            </a>

            <Tooltip placement="bottom" content="Search">
              <SearchIcon className="h-10 hover:bg-indigo-500 rounded cursor-pointer space-x-5" onClick={handler}/>
            </Tooltip>

            <Tooltip placement="bottom" content="Friends">
              <UserGroupIcon className="h-10 hover:bg-indigo-500 rounded cursor-pointer space-x-5"/>
            </Tooltip>
            
            <Tooltip placement="bottom" content="Settings">
              <a href="/Profile/Settings">
            <CogIcon className="h-10 hover:bg-indigo-500 rounded cursor-pointer space-x-5"/>
            </a>
            </Tooltip>
            
        </div>

        <div>
      <Modal
        closeButton
        animated={false}
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Search
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Search the Yeet Site..."
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

    </div>
  )
}

export default Topbar