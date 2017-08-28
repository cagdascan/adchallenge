import React, { Component } from 'react';

class DataRow extends Component {
  renderChildren(children) {
    if (!children || !children.length) {
      return null;
    }

    const rowList = children.map((i, idx) => (
      <DataRow item={i} key={idx} />
    ));

    return (
      <tr>
        <td colSpan="12">
          <div>
            <table>
              {rowList}
            </table>
          </div>
        </td>
      </tr>
    )
  }

  render() {
    const { item } = this.props;

    return (
      <tbody>
        <tr>
          <td>
            {item.ID}
          </td>
          <td>
            {item.Phone}
          </td>
          <td>
            {item.City}
          </td>
          <td>
            {item.Name}
          </td>
        </tr>
        {this.renderChildren(item.children)}
      </tbody>
    );
  }
}

export default DataRow;