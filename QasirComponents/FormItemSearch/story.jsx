import React from 'react';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import FormItemSearch from './index';

const FormItem = Form.Item
class FormItemSearchExample extends React.Component {
  handleQuerySearch(e) {
    let query = e.target.value
    const {changeFilterPurchases} = this.props
    changeFilterPurchases({'query': query, 'page': 1})
  }
  handleChangeSearch(e){
    let query = e.target.value
    this.setState({ inputSearch: query });
  }
  handleQuerySearchClick(){
    console.log(this.state.inputSearch)
    const {changeFilterPurchases} = this.props
    changeFilterPurchases({'query': this.state.inputSearch, 'page': 1})
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }
  render() {
    return (
      <div>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Row gutter={24}>
            <Col span={24}>
              <FormItemSearch 
                placeHolder="Cari" 
                styleCss={{ width: 180 }} 
                onPressEnter={this.handleQuerySearch.bind(this)}
                onChange={this.handleChangeSearch.bind(this)}
                />
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}
FormItemSearchExample = Form.create()(FormItemSearchExample);
export default FormItemSearchExample;