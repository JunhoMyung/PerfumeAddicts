import React, { Component } from "react";
import {
    MusicH1,
    MusicH2,
    Musiccontent,
    MusicH3,
    Musicbtn,
    Recommendbtn
} from './music_style';
import Modal from 'react-modal';

class music extends Component {

    constructor(){
        super();
        this.state = {
            upvote : true,
            modal : false,
            showmodal : false,
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);    
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }
      
    handleCloseModal () {
        this.setState({ showModal: false });
    }

    upvote = () => {
        if (this.state.upvote){
            return(
                <i className="fas fa-thumbs-up"></i>
            );
        }
        else{
            return(
                <i className="far fa-thumbs-up"></i>
            );
        }
    }

    handleclick = () => {
        if (this.state.upvote){
            this.setState({upvote: false});
        }
        else {
            this.setState({upvote: true});
        }
    }

    componentWillMount() {
        Modal.setAppElement('body');
    }

    render(){
        return (
            <div>
                <MusicH1>Top Recommendations</MusicH1>
                <table width = "80%" align = "center">
                    <tbody>
                        <tr>
                            <td width = "80%">
                                <MusicH2>Perfect - Ed Sheeran</MusicH2>
                            </td>
                            <td width = "15%">
                                <MusicH3>23 Likes</MusicH3>
                            </td>
                            <td>
                                <Musicbtn onClick = {this.handleclick}>{this.upvote()}</Musicbtn>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br></br>
                <table width = "70%" align = "center">
                    <tbody>
                        <tr>
                            <td>
                                <Musiccontent>ID: Perfume Addict</Musiccontent>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Musiccontent>
                                    The scent from patchouli and Iris makes me feel as if I’m in a fresh forest full of flowers. It directly resembled me of the MV of perfect, which starts from a mountain!
                                </Musiccontent>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table width = "80%" align = "center">
                    <tbody>
                        <tr>
                            <td width = "80%">
                                <MusicH2>Perfect - Ed Sheeran</MusicH2>
                            </td>
                            <td width = "15%">
                                <MusicH3>23 Likes</MusicH3>
                            </td>
                            <td>
                                <Musicbtn onClick = {this.handleclick}>{this.upvote()}</Musicbtn>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br></br>
                <table width = "70%" align = "center">
                    <tbody>
                        <tr>
                            <td>
                                <Musiccontent>ID: Perfume Addict</Musiccontent>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Musiccontent>The scent from patchouli and Iris makes me feel as if I’m in a fresh forest full of flowers. It directly resembled me of the MV of perfect, which starts from a mountain!</Musiccontent>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Recommendbtn onClick = {this.handleOpenModal}>Recommend Music by Myself!</Recommendbtn>
                <Modal 
                    isOpen={this.state.showModal}
                    onRequestClose={this.handleCloseModal}
                    shouldCloseOnOverlayClick={true}
                >
                    <button onClick={this.handleCloseModal}>Close Modal</button>
                </Modal>
            </div>
        )
    }
}

export default music
