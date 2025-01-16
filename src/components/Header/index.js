import { Dropdown, Space, Typography } from 'antd'

import "./index.css"

const Header = () => {

    const items = [
        {
          key: '1',
          label: 'Item 1',
        },
        {
          key: '2',
          label: 'Item 2',
        },
        {
          key: '3',
          label: 'Item 3',
        },
      ]

    return(
        <div className="header">
        <div className="logo">
        </div>
        <div className="pages">
            <div className="links" id="links">
                <href className="single_link">HOME</href>
                <href className="single_link">PROJECTS</href>
                <href className="single_link">SERVICES</href>
                <href className="single_link">ABOUT US</href>
                <href className="single_link">OUR PARTNERS</href>
                <href className="single_link">CONTACTS</href>
                <Dropdown
                    menu={{
                        items,
                        selectable: true,
                        defaultSelectedKeys: ['3'],
                    }}
                >
                    <Typography.Link>
                        <Space>
                        <div className='lang'>
                            
                        </div></Space>
                    </Typography.Link>
                </Dropdown>
            </div>
        </div>
    </div>
    )
}

export default Header