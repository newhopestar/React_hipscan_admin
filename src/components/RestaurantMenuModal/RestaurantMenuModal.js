import React from 'react';
import './RestaurantMenuModal.css';
import { Link } from 'react-router-dom';
import { Modal,Button } from 'react-bootstrap';
import { GiOpenFolder } from 'react-icons/gi';
import { FaDribbble, FaFacebookF,FaTwitter,FaInstagram,FaRegPlayCircle,FaTrashAlt } from 'react-icons/fa'
import { TiSocialYoutubeCircular, TiSocialVimeoCircular } from 'react-icons/ti'
import { MdEdit } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import EditProductModal from './EditProductModal/EditProductModal';
import { array } from 'prop-types';
import { v1 as uuidv1 } from 'uuid';

class RestaurantMenuModal extends React.Component{
    constructor(props){
        super(props);
        this.state={
            editShow:false,
            category:[],
            product:[],
            categorySelectedItem: null,
            productSelectedItem: null
        }
        this.editProductModalShow = this.editProductModalShow.bind(this);
        this.editProductModalHide = this.editProductModalHide.bind(this);
        this.addCategory = this.addCategory.bind(this);
        this.addProduct =  this.addProduct.bind(this);
        this.changeCategoryItem = this.changeCategoryItem.bind(this);
        this.changeProductItem =  this.changeProductItem.bind(this);
    }

    editProductModalShow() {this.setState({editShow: true});}
    editProductModalHide() {this.setState({editShow: false}); }
    addCategory = () => {
        var { category } = this.state;
        var id= uuidv1();
        category.push(id);
        this.setState({category:category})
        this.setState({categorySelectedItem:id})
    }
    itemDelete = () =>{
        var {category } = this.state;
        for (var i = 0; i< category.length; i++) {
            if ( category[i]===this.state.categorySelectedItem ) {
                category.splice(i,1);
            }
        }
        this.setState({category:category})
    
    }

    addProduct = () => {
        var { product } = this.state;
        var id= uuidv1();
        product.push(id);
        this.setState({product:product})
        this.setState({productSelectedItem:id})
    }
    
    productItemDelete = () => { 
        var {product } = this.state;
        for (var i = 0; i< product.length; i++) {
            if ( product[i]===this.state.productSelectedItem ) {
                product.splice(i,1);
            }
        }
        this.setState({product:product})
    }
    changeCategoryItem = (item) => {
        this.setState({
            categorySelectedItem: item,

        })
    }
    changeProductItem = (item) => {
        this.setState({
            productSelectedItem: item,
        })
    }
    render(){

        return(
            <Modal
                show={this.props.show}
                onHide={() => this.props.modalHide()}
                dialogClassName="restaurant-menu-modal-container"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Restaurant Menu
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-container">
                        <div className="categories">
                            <p>Categories</p>
                            <div className="add-categories">
                                <div className="add">
                                    <Button onClick={this.addCategory}>+Add Category</Button>
                                </div>
                                {
                                    this.state.category.map((item)=>(
                                        <div key={item} className={this.state.categorySelectedItem == item ? "active" : "category"} onClick={() => this.changeCategoryItem(item)}>
                                            <p>item</p>
                                            <MdEdit className="edit" onClick={this.editProductModalShow}/>
                                            <FaTrashAlt onClick={this.itemDelete}className="trash"/>
                                        </div>
                                    ))
                                }
                                <EditProductModal show={this.state.editShow} modalHide={this.editProductModalHide}/>
                            </div>
                        </div>
                        <div className="line">
                        
                        </div>
                        <div className="products">
                            <p>Products</p>
                            <div className="add-products">
                                <div className="add">
                                    <Button onClick={this.addProduct}>+Add Product</Button>
                                </div>
                                {
                                    this.state.product.map((item)=>(
                                        <div className={this.state.productSelectedItem == item ? "active" : "category"} onClick={() => this.changeProductItem(item)}>
                                            <p>item</p>
                                            <MdEdit className="edit" onClick={this.editProductModalShow}/>
                                            <FaTrashAlt onClick={this.productItemDelete} className="trash"/>
                                        </div>
                                    ))
                                }
                                {/* <EditProductModal show={this.state.editShow} modalHide={this.editProductModalHide}/> */}
                            </div>
                        </div>
                        <div className="save-btn">
                            <p className="goto" onClick={this.props.modalHide}><IoIosArrowBack size="1.3rem"/>Return Without Saving</p>
                            <Button onClick={this.props.modalHide}>SAVE</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
}

export default RestaurantMenuModal;