import React, { Component } from 'react';
import { Text, View, Alert, Picker } from 'react-native';
import { Card, Button, Section, TextInputt, CardSection } from './common';
export default class AddProduct extends Component {

  state = { title: '', product_title: '',
  product_description_en: '',
  product_description: '',
  auth: '40822bf8da8c608d5aea268d69db005140bd39a7'}



  getAuth(){
    fetch(’https://haaz.exp-pv.com/api/get_auth', {
      method: ‘GET’,
      headers: {
        Accept: ‘application/json’, ‘Content-Type’: ‘application/json’,
      }}).then((response) => response.json())
      .then((responseJson) => {
        console.log(“sad,jf”);
        console.log(responseJson);
        return;
      })
      .catch((error) => {
        console.error(error);
      });
    }

    SendProductToBackendAndSaveResults() {
      fetch('https://haaz.exp-pv.com/api/create_product', {
        method: 'POST',
        body: JSON.stringify({ auth: '40822bf8da8c608d5aea268d69db005140bd39a7', ...this.state   }),
      }).then((response) => {
        const res = response.status;
        res === 200 ? console.log('it worksss!!!') : console.log(`Fuck the STATUS # is ${res}`);
        return;
      })
      .catch((error) => {
        console.error(error);
      });
    }

    //   getProductsIds(){
    //     fetch('https://haaz.exp-pv.com/api/get_product_type', {
    //
    //     }).then((response) => {
    //       Object.keys(response.json())
    //       .map((key, index) => {
    //
    //         console.log(response.json()[key]);
    //
    //       })
    //
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    // }

    // ShowList(){
    //   if (this.state.product_id.length > 0) {
    //     return (
    //       <CardSection style={{ marginLeft: 5, marginRight: 5, color: 'white' }}>
    //       <Picker
    //       style={{ flex: 1, height: 44 }}
    //       itemStyle={{ height: 44, borderWidth: 0 }}
    //       selectedValue={this.state.category}
    //       onValueChange={category => this.setState({ category })}
    //       >
    //       <Picker.Item label="اظهر الكل" value="all" />
    //       <Picker.Item label="مطاعم" value="resturant" />
    //       <Picker.Item label="فنادق" value="hotel" />
    //       <Picker.Item label="سوبرماركت" value="supermarket" />
    //       <Picker.Item label="محطة وقود" value="gas station" />
    //
    //       </Picker>

    //       </CardSection>
    //     );
    //   } else {
    //     this.getProductsIds();
    //   }
    // }
    Screen(){
      return(

        <Card>
        <Section>
        <TextInputt
        label="title "
        placeholder="title"
        onChangeText={(text) => (this.setState({ title: text }))}
        value={this.state.title}
        />

        </Section>
        <Section>
        <TextInputt
        label=" title"
        placeholder="product_title"
        onChangeText={(text) => (this.setState({ product_title: text }))}
        value={this.state.product_title}

        />
        </Section>

        <Section>
        <TextInputt
        label=" desc"
        placeholder=" product_description_en"
        onChangeText={(text) => (this.setState({ product_description_en: text }))}
        value={this.state.product_description_en}


        />
        </Section>

        <Section>
        <TextInputt
        secureTextEntry
        label="product_description   "
        placeholder="product_description"
        onChangeText={(text) => (this.setState({ product_description: text }))}
        value={this.state.product_description}

        />
        </Section>

        <Section>
        <Button whenPress={() => (this.getAuth.bind(this))}>
        تابع !
        </Button>
        <Button whenPress={() => (Alert.alert(this.state.responseJson))}>
        Check Here !
        </Button>
        </Section>
        </Card>
      );
    }
    render() {
      return (
        this.Screen()

      );
    }
  }
