import { Button, Form, Input} from 'antd';
import 'antd/dist/antd.css'; 
import React, { useState } from 'react';
import { exportComponentAsJPEG } from 'react-component-export-image';

const ref = React.createRef();

const App = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;

  //display image from form
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  //set dear useeffect
  const [dear, setDear] = useState(null);

  const handleDear = (e) => {
    setDear(e.target.value);
  };
  
  //set message
  const [message, setMessage] = useState(null);

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  //set from
  const [from, setFrom] = useState(null);

  const handleFrom = (e) => {
    setFrom(e.target.value);
  };

  //Watch dear, from and message
  React.useEffect(() => {
    console.log(dear);
    console.log(from);
    console.log(message);
  }, [dear, from, message]);
  
  return (
    <div style={{ paddingTop:"5%",paddingBottom:"5%",paddingLeft:"35%", paddingRight:"35%" }}>
      <h1>Gift Card</h1>
      {url ? (
      
      <div id="greet" style={{ display: "flex", justifyContent: "center", alignItems: "center"}} ref={ref}>
        <div style={{ backgroundImage: `url(${url})`, backgroundSize: "cover", height: "500px", width: "500px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection:"column"}}>
          <h1 style={{  fontSize:"12px", color: "black",marginTop:"-50px", marginLeft:"100px" }}>
            { dear }
          </h1>
          <h1 style={{  fontSize:"12px", color: "black",marginTop:"15px", marginLeft:"150px", width:"300px"}}>
            { message }
          </h1>
          <h1 style={{  fontSize:"12px", color: "black", marginTop:"15px", marginLeft:"-120px" }}>{}</h1>
          <h1 style={{  fontSize:"12px", color: "black", marginTop:"35px", marginLeft:"70px" }}>
            { from }
          </h1>
        </div>
      </div>
      ) : (
        null
      )}

      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onValuesChange={onFormLayoutChange}
      >
        <Form.Item>
        </Form.Item>
        <label>File Upload</label>
          <Form.Item>
            <Input type="file" onChange={handleChange} />
          </Form.Item>
        <label>Dear</label>
          <Form.Item  name="dear" id="dear">
            <Input onClick={handleDear} maxlength="20" id='dear' name='dear' placeholder="input placeholder" />
          </Form.Item>
        <label>Message</label>
          <Form.Item  name="message" id="message">
            <Input onClick={handleMessage} maxlength="40" id='message' placeholder="input placeholder" />
          </Form.Item>
        <label>From</label>
          <Form.Item id='from' name="from">
            <Input onClick={handleFrom} maxlength="20" id='from' placeholder="input placeholder" />
          </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button onClick={() => exportComponentAsJPEG(ref)}>
            Download
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default App;