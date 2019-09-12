import React from 'react'
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity
}from 'react-native'
import axios from 'axios'

class Editdata extends React.Component{

	constructor(props) {
    
       super(props)
    
       this.state = {
    
         TextInput_Student_ID: '',
         TextInput_Student_Name: '',
         TextInput_Student_Class: '',
         TextInput_Student_PhoneNumber: '',
         TextInput_Student_Email: '',
    
       }
    
     }
 
     componentDidMount(){
 
      // Received Student Details Sent From Previous Activity and Set Into State.
      this.setState({ 
        TextInput_Student_ID : this.props.navigation.state.params.ID,
        TextInput_Student_Name: this.props.navigation.state.params.NAME,
        TextInput_Student_Class: this.props.navigation.state.params.CLASS,
        TextInput_Student_PhoneNumber: this.props.navigation.state.params.PHONE_NUMBER,
        TextInput_Student_Email: this.props.navigation.state.params.EMAIL,
      })
 
     }


   editdata = () =>{
        axios.post('http://homekomputer.000webhostapp.com/api/EditData.php', {
          student_id : this.state.TextInput_Student_ID,
          student_name : this.state.TextInput_Student_Name,
          student_class : this.state.TextInput_Student_Class,
          student_phone_number : this.state.TextInput_Student_PhoneNumber,
          student_email: this.state.TextInput_Student_Email
        })
                .then(res => console.log(res)) 
                .catch(err => console.log(err))
                
 }


 	hapusdata = () => {
 		axios.post('http://homekomputer.000webhostapp.com/api/HapusData.php',{
 			  student_id : this.state.TextInput_Student_ID
 		})

 		  .then(res => console.log(res)) 
          .catch(err => console.log(err))

          this.props.navigation.navigate('Tampildata');

 	}


	render(){
		return(

				<View style={styles.MainContainer}>

			 		<Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> Edit Data </Text>

				     <TextInput
		            
		            placeholder="Student Name Shows Here"
		            
		            value={this.state.TextInput_Student_Name}
		   
		            onChangeText={ TextInputValue => this.setState({ TextInput_Student_Name : TextInputValue }) }
		   
		            underlineColorAndroid='transparent'
		   
		            style={styles.StylingTextInput}
		          />
		   
		         <TextInput
		            
		            placeholder="Student Class Shows Here"
		 
		            value={this.state.TextInput_Student_Class}
		   
		            onChangeText={ TextInputValue => this.setState({ TextInput_Student_Class : TextInputValue }) }
		   
		            underlineColorAndroid='transparent'
		   
		            style={styles.StylingTextInput}
		          />
		   
		         <TextInput
		            
		            placeholder="Student Phone Number Shows Here"
		 
		            value={this.state.TextInput_Student_PhoneNumber}
		   
		            onChangeText={ TextInputValue => this.setState({ TextInput_Student_PhoneNumber : TextInputValue }) }
		   
		            underlineColorAndroid='transparent'
		   
		            style={styles.StylingTextInput}
		          />
		   
		          <TextInput
		   
		            placeholder="Student Email Shows Here"
		 
		            value={this.state.TextInput_Student_Email}
		   
		            onChangeText={ TextInputValue => this.setState({ TextInput_Student_Email : TextInputValue }) }
		   
		            underlineColorAndroid='transparent'
		   
		            style={styles.StylingTextInput}
		          />

		          <TouchableOpacity activeOpacity = { .4 } style={styles.Btn_TambahData} onPress={this.editdata} >
   
		            <Text style={styles.StyleTambahData}> Edit Data </Text>
		   
		         </TouchableOpacity>

		          <TouchableOpacity activeOpacity = { .4 } style={styles.Btn_TambahData} onPress={this.hapusdata} >
   
		            <Text style={styles.StyleTambahData}> Hapus Data </Text>
		   
		         </TouchableOpacity>


   			</View>
		)
	}
}

const styles = StyleSheet.create({
 
  MainContainer :{
 
    alignItems: 'center',
    flex:1,
    paddingTop: 30,
    backgroundColor: '#fff'
 
  },
 
  StylingTextInput: {
 
  textAlign: 'center',
  width: '90%',
  marginBottom: 7,
  height: 40,
  borderWidth: 1,
  borderColor: '#075e54',
  borderRadius: 5 ,
 
  },
 
  Btn_TambahData: {
 
    paddingTop:10,
    paddingBottom:10,
    borderRadius:5,
    marginBottom:7,
    width: '90%',
    backgroundColor: '#00BCD4'
 
  },
 
  StyleTambahData:{
    color:'#fff',
    textAlign:'center',
  },
 
});


export default Editdata