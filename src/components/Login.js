import React, { Component } from 'react';
import { Dimensions, View } from 'react-native';
import SideMenu from 'react-native-side-menu';
import { Card, Button, Section, TextInputt } from './common';
import Menu from './Menu';

const window = Dimensions.get('window');

class Login extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
      selectedItem: 'About',
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

  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

	    return (
        <View>
        <View
        style={{ width: window.width,
        height: window.height }}
        />
        <SideMenu
          menu={menu}
          isOpen={this.state.isOpen}
          onChange={isOpen => this.updateMenuState(isOpen)}
        >
        			<Card>
              <Section>
                <TextInputt
                label="الاسم "
                  placeholder=" الاسم"
                />

              </Section>
        				<Section>
        					<TextInputt
        					label="البريد الإلكتروني"
        						placeholder="البريد الإلكتروني"
        					/>
        				</Section>

        				<Section>
        					<TextInputt
        						secureTextEntry
        						label="كلمة المرور"
        						placeholder="كلمة المرور"

        					/>
        				</Section>

                <Section>
        					<TextInputt
        						secureTextEntry
        						label="تاكيد كلمة المرور "
        						placeholder="تاكيدكلمة المرور "
        					/>
        				</Section>

                <Section>
        					<TextInputt
        					label=" رقم الجوال"
        						placeholder="رقم الجوال "

        					/>
        				</Section>

        				<Section>
                <Button >
                تابع !
                </Button>
        				</Section>
        			</Card>
              </SideMenu>
              </View>
	    );
	  }
	}


	export default Login;
