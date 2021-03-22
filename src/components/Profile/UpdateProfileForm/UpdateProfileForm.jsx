import React from "react";
import AvatarUpload from "../../common/AvatarUpload/AvatarUpload";

import { Select, Form, Input, Button, DatePicker, Space } from "antd";
import "./index.sass";
import PhotoUpload from "../../common/PhotoUpload/PhotoUpload";

const { Option } = Select;

const UpdateProfileForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="update-profile-wrapper">
      <Form
        form={form}
        name="update_profile_form"
        onFinish={onFinish}
        // initialValues={{
        //   residence: ['zhejiang', 'hangzhou', 'xihu'],
        //   prefix: '86',
        // }}
        //scrollToFirstError
      >
        <div className="update-avatar">
          <Form.Item name="avatar">
            <AvatarUpload />
          </Form.Item>
        </div>
        <div className="form-items-wrapper">
          <Form.Item name="genre" rules={[{ required: false }]}>
            <Select
              placeholder="Your genre"
              className="update-form-genre-select font-update-form"
              showArrow
              //onChange={this.onGenderChange}
              allowClear
              mode="multiple"
              maxTagCount="responsive"
            >
              <Option value="genre1">genre 1</Option>
              <Option value="genre2">genre 2</Option>
              <Option value="genre3">genre 3</Option>
              <Option value="genre4">genre 4</Option>
              <Option value="genre5">genre 5</Option>
              <Option value="genre6">genre 6</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="fullname"
            rules={[
              { required: false, message: "Please input your fullname!" },
            ]}
          >
            <Input
              placeholder="Your fullname"
              className="update-form-fullname font-update-form"
            />
          </Form.Item>

          <Form.Item name="date_of_birth" rules={[{ required: false }]}>
            <DatePicker
              className="update-form-date-of-birth font-update-form"
              placeholder="Date of birth"
            />
          </Form.Item>

          <Form.Item name="gender" rules={[{ required: false }]}>
            <Select
              placeholder="Your gender"
              className="update-form-genre-select update-form-gender-select font-update-form"
              showArrow
              //onChange={this.onGenderChange}
              allowClear
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="phone_number"
            rules={[
              { required: false, message: "Please input your phone number!" },
            ]}
          >
            <Input
              placeholder="Phone number"
              className="update-form-fullname font-update-form"
            />
          </Form.Item>

          <Form.Item
            name="address"
            rules={[{ required: false, message: "Please input your address!" }]}
          >
            <Input
              placeholder="Address"
              className="update-form-fullname font-update-form"
            />
          </Form.Item>

          {/* <div className="add-more-wrapper">
            <div className="single-add-more-wrapper">
              <Form.Item
                name="audio"
                rules={[
                  { required: false, message: "Please put your song link here" },
                ]}
              >
                <Input
                  placeholder="Put your song link here"
                  className="update-form-fullname font-update-form dynamic"
                />
              </Form.Item>
              <div className="add-more font-update-form">+ Add more</div>
            </div>

            <div className="single-add-more-wrapper">
              <Form.Item
                name="video"
                rules={[
                  { required: false, message: "Please put your video link here" },
                ]}
              >
                <Input
                  placeholder="Put your video link here"
                  className="update-form-fullname font-update-form dynamic"
                />
              </Form.Item>
              <div className="add-more font-update-form">+ Add more</div>
            </div>
          </div> */}
          <div className="add-more-wrapper">
            <div className="single-add-more-wrapper">
              <Form.Item
                name="audio"
                rules={[
                  {
                    required: false,
                    message: "Please put your song link here",
                  },
                ]}
              >
                <Input
                  placeholder="Put your song link here"
                  className="update-form-fullname font-update-form dynamic"
                />
              </Form.Item>
              <div className="add-more font-update-form">+ Add more</div>
            </div>

            <div className="single-add-more-wrapper">
              <Form.Item
                name="video"
                rules={[
                  {
                    required: false,
                    message: "Please put your video link here",
                  },
                ]}
              >
                <Input
                  placeholder="Put your video link here"
                  className="update-form-fullname font-update-form dynamic"
                />
              </Form.Item>
              <div className="add-more font-update-form">+ Add more</div>
            </div>
          </div>
        </div>

        <div className="uploads-wrapper">
          <Form.Item
            name="main_photo"
            rules={[
              { required: false, message: "Please put your video link here" },
            ]}
          >
            <div className="uploader">
              <div className="font-update-form">Main Photo</div>
              <PhotoUpload />
            </div>
          </Form.Item>

          <Form.Item
            name="multi_photo"
            rules={[
              { required: false, message: "Please put your video link here" },
            ]}
          >
            <div className="uploader">
              <div className="font-update-form">About Your Photo</div>
              <PhotoUpload />
            </div>
          </Form.Item>
        </div>

        <Form.Item
          name="bio"
          rules={[
            { required: false, message: "Please put your video link here" },
          ]}
        >
          <div className="bio-wrapper">
            <Input.TextArea
              placeholder="Bio"
              className="update-form-fullname font-update-form bio"
            />
          </div>
        </Form.Item>

        <Form.Item>
          <div className="btn-update-wrapper">
            <Button
              type="primary"
              htmlType="submit"
              className="btn-update-profile font-update-form"
              shape="round"
            >
              Update Profile
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateProfileForm;
