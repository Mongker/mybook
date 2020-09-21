import React from "react";
import { Table, Button, Popconfirm, Input, Row, Col, Image } from "antd";

// component
import ModelView from "../modal/ModelView";
import { EditableRow, EditableCell } from "./EditTable.jsx";

// const
const { Search } = Input;
const height = (window.innerHeight - (window.innerHeight * 0.25)).toString() + "px";

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "Tên slider",
        dataIndex: "name",
        width: "20%",
        editable: true,
      },
      {
        title: "Hình ảnh",
        dataIndex: "slider",
        width: "40%",
      },
      {
        title: "Liên kết",
        dataIndex: "link",
        width: "30%",
      },
      {
        title: "Hành động",
        dataIndex: "Hành động",
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => this.handleDelete(record.key)}
            >
              <a>Delete</a>
            </Popconfirm>
          ) : null,
      },
    ];
    this.state = {
      dataSource: [
        {
          key: "0",
          name: "Edward King 0",
          slider: <Image width={200} height={50} src="https://via.placeholder.com/300x70" />,
          link: "https://robohash.org/assumendaquissunt.png?size=300x70&set=set2",
        },
        {
          key: "1",
          name: "Edward King 1",
          slider: <Image width={200} height={50} src="https://via.placeholder.com/300x70" />,
          link: "https://robohash.org/assumendaquissunt.png?size=300x70&set=set1",
        },
      ],
      count: 2,
      visible: false,
    };
  }

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),
    });
  };
  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      slider: <Image width={200} height={50} src="https://via.placeholder.com/300x70" />,
      link: `https://robohash.org/assumendaquissunt.png?size=300x70&set=set{count}`,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
    // this.showModalCancel(); // MongLV
  };
  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
    });
  };

  showModalCancel = () => {
    const { visible } = this.state;
    this.setState({
      visible: !visible,
    });
  };

  handleOk = (event) => {
    this.showModalCancel();
  };

  render() {
    const { dataSource, visible } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div>
        <Row style={{ paddingBottom: "5px" }}>
          <Col span={12} offset={10}>
            <Search
              placeholder="Tìm kiếm"
              onSearch={(value) => console.log(value)}
              style={{ width: "97%" }}
              enterButton
            />
          </Col>
          <Col span={2}>
            <Button onClick={this.handleAdd} type="primary">
              Thêm
            </Button>
          </Col>
        </Row>
        <Row>
          <Table
            components={components}
            rowClassName={() => "editable-row"}
            bordered
            dataSource={dataSource}
            columns={columns}
            scroll={{ x: "100%", y: `${height}` }}
            pagination={false}
          />
        </Row>
        <ModelView
          handShowCancel={this.showModalCancel}
          handleOk={this.handleOk}
          visible={visible}
        />
      </div>
    );
  }
}

export default React.memo(EditableTable);
