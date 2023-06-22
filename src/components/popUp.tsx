import "../style/pop-up.css"
import { CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const popUp = document.querySelector('.pop-up') as HTMLDivElement;

const showPopUp = () => {
    popUp.classList.add('showPop');
    popUp.classList.remove('hide');
}

const hidePopUp = () => {
    popUp.classList.add('hide');
    popUp.classList.remove('showPop');
}

const PopUP: React.FC = () => {
    return(
            <div className="pop-up hide">
                <header className="pop-header">
                    <div className="headerPop">
                        <h4 className="pop-title">Add New Plugin</h4>
                        <Button type="text" className="exit-btn" icon={<CloseOutlined />} onClick={hidePopUp}/>
                    </div>
                </header>
                <form className="pop-upForm">
                    <label className="pop-label" htmlFor="pluginName">Plugin Name</label>
                    <input autoComplete="off" type="text" placeholder="example" id="pluginName" />
                    <label className="pop-label" htmlFor="description">Description</label>
                    <textarea id="description" placeholder="Autosize height based on content" maxLength={100} autoComplete="off" />
                    <label className="pop-label" htmlFor="source">Source</label>
                    <input type="text" placeholder="example" id="source" autoComplete="off" />
                    <label className="pop-label" htmlFor="category">Add category name</label>
                    <input type="text" placeholder="Design System" id="category" autoComplete="off" />
                </form>
                <footer className="pop-footer">
                <Button type="primary" shape="round" className="save-btn">
                    Save
                </Button>
                </footer>
            </div>
    )
}

export {PopUP, showPopUp}