import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./index.css";

const FlippingTab = React.forwardRef((props, ref) => (
    <FlippingTabComponet {...props} ref={ref} />
));
const FlippingTabComponet = ({ className, tab, options }) => {
    const [activeTab, setActiveTab] = useState(tab.length > 0 ? tab[0].id : '');
    const [tabContents, setTabContents] = useState([])

    const changeTabHandler = (event) => {
        const newSliceArray = tab.filter((it) => it.id !== event.id);
        const res = [event, ...newSliceArray]
        setActiveTab(event.id)
        setTabContents(res)
    }

    useEffect(() => {
        setTabContents(tab)
    }, tab)

    return (
        <div className={`tab3d-slider ${className} ${options.mobileFrame ? 'mobile-frame' : ''}`}>
            <div className="tab3d-row">
                <div className="tab3d-col">
                    <div className="tab3d-nav ps-5">
                        <ul>
                            {
                                tab.length > 0 ?
                                    tab.map((item, i) => (
                                        <li key={i}><button className={`${activeTab === item.id ? 'active' : ''}`} onClick={() => changeTabHandler(item)}>{item.nav}</button></li>
                                    ))
                                    : null
                            }
                        </ul>
                    </div>
                </div>
                <div className="tab3d-col">
                    <div className="pe-7">
                        <div className="tab3d-content">
                            {
                                tabContents.length > 0 ?
                                    tabContents.map((item, i) => (
                                        <div className="tab3d-content-item" key={i}>
                                            <img className="img-fluid" src={item.content} alt="" />
                                        </div>
                                    ))
                                    : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

FlippingTab.propTypes = {
    options: PropTypes.object
};

export default FlippingTab;