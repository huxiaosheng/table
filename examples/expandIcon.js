/* eslint-disable no-console,react/prop-types,react/no-danger */
import React from 'react';
import ReactDOM from 'react-dom';
import Table from 'rc-table';
import 'rc-table/assets/index.less';

const data = [
  { key: 0, a: '123' },
  { key: 1, a: 'cdd', b: 'edd' },
  { key: 2, a: '1333', c: 'eee', d: 2 },
];

const columns = [
  { title: 'title 1', dataIndex: 'a', key: 'a', width: 100 },
  { title: 'title 2', dataIndex: 'b', key: 'b', width: 100 },
  { title: 'title 3', dataIndex: 'c', key: 'c', width: 200 },
];

function CustomExpandIcon(props) {
  let text;
  if (props.expanded) {
    text = '&#8679; collapse';
  } else {
    text = '&#8681; expand';
  }
  return (
    <a
      className="expand-row-icon"
      onClick={e => props.onExpand(props.record, e)}
      dangerouslySetInnerHTML={{ __html: text }}
      style={{ color: 'blue', cursor: 'pointer' }}
    />
  );
}

class Demo extends React.Component {
  onExpand = (expanded, record) => {
    console.log('onExpand', expanded, record);
  };

  render() {
    return (
      <div>
        <Table
          columns={columns}
          expandedRowRender={record => <p>extra: {record.a}</p>}
          onExpand={this.onExpand}
          expandIcon={CustomExpandIcon}
          expandIconAsCell
          data={data}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <h2>expandIcon</h2>
    <Demo />
  </div>,
  document.getElementById('__react-content'),
);
