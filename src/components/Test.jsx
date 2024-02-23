import { faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Menu, MenuItem, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const Test = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <Button onClick={open}>Open modal</Button>

      <Modal opened={opened} onClose={close} title="hellouuw">
        {/* Modal content */}
        <div>hello world</div>
      </Modal>
      <div className="text-right">
        <Menu
          transitionProps={{ transition: "rotate-right", duration: 150 }}
          position="left-start"
        >
          <Menu.Target>
            <Button>Toggle menu</Button>
          </Menu.Target>
          <Menu.Dropdown offset={8}>
            {/* Menu items */}
            <Menu.Item
              // leftSection={}
              disabled
            >
              <div className="">jajaj</div>
            </Menu.Item>
            <Menu.Item
              leftSection={<FontAwesomeIcon icon={faTag} className="w-3 h-3" />}
            >
              Gallery
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
    </div>
  );
};

export default Test;
