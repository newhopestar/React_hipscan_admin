import React from 'react';
import './EditProductModal.css';
import { Modal,Button } from 'react-bootstrap';
import { GiOpenFolder } from 'react-icons/gi';
import { FaDribbble, FaFacebookF,FaTwitter,FaInstagram,FaRegPlayCircle } from 'react-icons/fa'
import { TiSocialYoutubeCircular, TiSocialVimeoCircular } from 'react-icons/ti'
import { IoIosArrowBack } from 'react-icons/io';
import { v1 as uuidv1 } from 'uuid';

class EditProductModal extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedFile:null,
            addMod : []
        }
        this.upload= this.upload.bind(this);
        this.fileSelectHandle =  this.fileSelectHandle.bind(this);
        this.addModifier =  this.addModifier.bind(this);
    }
    upload() { document.getElementById("edit_product_selectImage").click() }
    fileSelectHandle(e){  this.setState({ selectedFile:e.target.files[0]}) }

    initModal() {
        this.setState({
            selectedFile: null
        })
    }
    addModifier() {
        var { addMod } = this.state;
        var id= uuidv1();
        addMod.push(id);
        this.setState({ addMod:addMod});
    }
    render(){
        return(
            <Modal
                onEnter={this.initModal.bind(this)}
                show={this.props.show}
                onHide={() => this.props.modalHide()}
                dialogClassName="menu-modal-container"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Edit Product
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="edit-product">
                        <div className="input-field">
                            <div className="image-upload">
                                <input id="edit_product_selectImage" type="file" hidden placeholder="Upload Photo" onChange={this.fileSelectHandle}></input>
                                <span>{this.state.selectedFile && this.state.selectedFile.name!==null ? this.state.selectedFile.name :"Upload photo"}</span>
                                <div className="icon" onClick={this.upload}><GiOpenFolder size="2.5rem" /></div>
                            </div>
                            <div className="name-price">
                                <div className="name">
                                    <input type="text" placeholder="Fluffy Pancakes" />
                                </div>
                                <div className="price">
                                    <input type="number" placeholder="$"/>
                                </div>
                            </div>
                            <div className="description">
                                <textarea type="text" placeholder="description of product"/>
                            </div>
                        </div>
                        <div className="image-preview">
                            <div className="image">
                                { this.state.selectedFile !==null ?
                                <img className="_image" src={URL.createObjectURL(this.state.selectedFile)} /> 
                                :
                                <p>Product image preview</p>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="modifiers">
                        <div className="input-field">
                            <p>Modifiers</p>
                            <div className="first">
                                <div className="name">
                                    <input type="text" placeholder="Extra Maple Syrup" />
                                </div>
                                <div className="price">
                                    <input type="number" placeholder="$"/>
                                </div>
                            </div>
                            <div className="first">
                                <div className="name">
                                    <input type="text" placeholder="Mixed Berries Topping" />
                                </div>
                                <div className="price">
                                    <input type="number" placeholder="$"/>
                                </div>
                            </div>
                            <div className="first">
                                <div className="name">
                                    <input type="text" placeholder="Vanilla Ice Cream" />
                                </div>
                                <div className="price">
                                    <input type="number" placeholder="$"/>
                                </div>
                            </div>
                            {
                            this.state.addMod.map((item) => (
                            <div className="first" key={item}>
                                <div className="name">
                                    <input type="text" placeholder="Enter you want" />
                                </div>
                                <div className="price">
                                    <input type="number" placeholder="$"/>
                                </div>
                            </div>
                            ))
                            }
                            <div className="add-btn">
                                <Button onClick={this.addModifier}>+Add Modifier</Button>
                            </div>
                        </div>
                    </div>
                    <div className="save-btn">
                        <p className="goto" onClick={this.props.modalHide}><IoIosArrowBack size="1.3rem"/>Return to Menu Without Saving</p>
                        <Button onClick={this.props.modalHide}>SAVE</Button>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
}

export default EditProductModal;