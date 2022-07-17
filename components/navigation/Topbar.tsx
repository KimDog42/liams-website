import React from 'react';
import {
    HomeIcon,
    SearchIcon,
    UserGroupIcon,
    CogIcon,
    ShoppingBagIcon,
} from "@heroicons/react/solid"
import Profile from '../Profile';
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";

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
            <HomeIcon className="h-10 hover:bg-indigo-500 rounded cursor-pointer space-x-5"/>
            <SearchIcon className="h-10 hover:bg-indigo-500 rounded cursor-pointer space-x-5" onClick={handler}/>
            <UserGroupIcon className="h-10 hover:bg-indigo-500 rounded cursor-pointer space-x-5"/>
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