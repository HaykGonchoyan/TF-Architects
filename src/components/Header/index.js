import { Link } from "react-router-dom"
import { ROUTE_CONSTANTS } from "../core/utils/constants"
import { DownOutlined } from "@ant-design/icons"
import { ConfigProvider, Dropdown } from "antd"
import { useState } from "react"

import "./index.css"


const Header = () => {
    const [lang, setLang] = useState("eng")

    const items = [
        {
          key: '1',
          label: 'ENG',
        },
        {
          key: '2',
          label: 'РУС',
        },
        {
          key: '3',
          label: 'ՀԱՅ',
        },
      ];
    
      console.log(lang);

    return(
        <div className="header">
        <div className="logo" />
        <div className="pages">
            <div className="links" id="links">
                <Link className="single_link" to="/"><div>HOME</div></Link>
                <Link className="single_link" to={ROUTE_CONSTANTS.PORTFOLIO}><div>PORTFOLIO</div></Link>
                <div className="single_link">SERVICES</div>
                <div className="single_link">ABOUT US</div>
                <div className="single_link">OUR PARTNERS</div>
                <div className="single_link">CONTACTS</div>

                <ConfigProvider
                    theme={{
                        token: {
                            colorBgContainer: "rgb(245, 245, 245)",
                            colorText: "rgb(77, 77, 77)",
                            colorPrimary: "rgb(110, 110, 110)",
                            colorPrimaryText: "rgb(0, 0, 0)",
                            colorPrimaryBg: "rgb(224, 224, 224)",
                        }
                    }}
                >

                <div className="single_link">
                <Dropdown
                    menu={{
                        items,
                        selectable: true,
                        defaultSelectedKeys: ['1'],
                      }}
                      trigger={['click']}
                      
                >
                            <div>{lang === "eng" ? "ENG" : lang === "rus" ? "РУС" : "ՀԱՅ"}<DownOutlined/></div>
                </Dropdown>
                
                </div>
                </ConfigProvider>
            </div>
        </div>
    </div>
    )
}

export default Header