import React, { Component } from 'react';
import { Text, View, Alert, Picker, Dimensions } from 'react-native';
import SideMenu from 'react-native-side-menu';

import { Card, Button, Section, TextInputt, CardSection } from './common';

import Menu from './Menu';

const window = Dimensions.get('window');

export default class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
      selectedItem: 'About',
      title: '',
      product_title: '',
      product_description_en: '',
      product_description: '',
      category: 'None',
      itemValue: '',
      categories: []
    };

  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  onMenuItemSelected = item =>
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
    state = {
        title: '',
        product_title: '',
        product_description_en: '',
        product_description: '',
        category: 'None',
        itemValue: '',
        categories: []
    };

    componentWillMount() {
        this.getProductsIds();
    }

    getAuth() {
        fetch('https://haaz.exp-pv.com/api/get_auth', {
            method: 'GET',
            headers: {
                Accept: 'application/json', 'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
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
            body: JSON.stringify({ auth: '57b126bcc851304b0e80c4c336074a690cc70c66', ...this.state }),
        })
            .then((response) => {
                const res = response.status;
                res === 200 ? console.log('it worksss!!!') : console.log(`Fuck the STATUS # is ${res}`);
                return;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    getProductsIds() {
        fetch('https://haaz.exp-pv.com/api/get_product_type', {
            method: 'GET',
            headers: {
                Accept: 'application/json', 'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ categories: responseJson });
                return;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    ShowList() {
        return (
            <Picker
                style={{ flex: 1, height: 44 }}
                itemStyle={{ height: 44, borderWidth: 0 }}
                selectedValue={this.state.category}
                onValueChange={category => this.setState({ category })}
            >
                {this.state.categories.map((item, index) => {
                    return <Picker.Item label={item.cat_name_en} value={index}/>;
                })}
            </Picker>
        );
    }

    categories = [];

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
    //        arr.map((item)=> (
    //        <Picker.Item label="cat_name_en" value=item.cat_name_en" />
    //        ))
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
    Screen() {
        return (

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
                    <Button whenPress={() => (this.getProductsIds())}>
                        تابع !
                    </Button>
                    <Button whenPress={() => (console.log(this.categories))}>
                        Check Here !
                    </Button>
                </Section>
            </Card>
        );
    }

    render() {
      const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

        return (
            <View  style={{
            backgroundColor: '#F5FCFF'}}>
            <View
      style={{ width: window.width,
            height: window.height }}
            />
            <SideMenu
              menu={menu}
              isOpen={this.state.isOpen}
              onChange={isOpen => this.updateMenuState(isOpen)}
            >
            <View style={{ flex:1,
            backgroundColor: '#F5FCFF'}}>
                <Card>
                    {this.ShowList()}
                </Card>
                <View style={{ marginTop: 50 }}>
                    {this.Screen()}
                </View>
                </View>
                </SideMenu>
            </View>


        );
    }
}

// getAuth(){
//   fetch('https://haaz.exp-pv.com/api/get_auth', {
//   }).then((response) => {
//     const res = response.status;
//     console.log(response.json());
//     res === 200 ? console.log('it worksss!!!') : console.log(`Fuck the STATUS # is ${res}`);
//     return;
//   })
//   .catch((error) => {
//     console.error(error);
//   });
// }
