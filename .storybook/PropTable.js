import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import PropVal from "@storybook/addon-info/dist/components/PropVal";
import PrettyPropType from "@storybook/addon-info/dist/components/types/PrettyPropType";

export const Table = styled.table`
  width: 80%;

  border-collapse: separate;
  border-spacing: 0 8px;
  padding: 8px 0;
`;

export const Td = styled.td`
  text-align: left;
  padding: 16px;
  font-weight: 300;
`;

export const Tr = styled.tr`
  background-color: #fff;
  border-radius: 5px;

  td:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  td:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

export const Th = styled.th`
  text-align: left;
  font-size: 14px;
  text-transform: uppercase;
  color: gray;
  padding: 8px 16px;
`;

export const Tbody = styled.tbody`
  margin: 16px 0;
`;

export const Thead = styled.thead`
  tr {
    background-color: transparent;
  }
`;

export const multiLineText = input => {
  if (!input) {
    return input;
  }
  const text = String(input);
  const arrayOfText = text.split(/\r?\n|\r/g);
  const isSingleLine = arrayOfText.length < 2;
  return isSingleLine
    ? text
    : arrayOfText.map((lineOfText, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <span key={`${lineOfText}.${i}`}>
          {i > 0 && <br />} {lineOfText}
        </span>
      ));
};

const determineIncludedPropTypes = (propDefinitions, excludedPropTypes) => {
  if (excludedPropTypes.length === 0) {
    return propDefinitions;
  }

  return propDefinitions.filter(
    propDefinition => !excludedPropTypes.includes(propDefinition.property)
  );
};

export default function PropTable(props) {
  const {
    type,
    maxPropObjectKeys,
    maxPropArrayLength,
    maxPropStringLength,
    propDefinitions,
    excludedPropTypes
  } = props;

  if (!type) {
    return null;
  }

  const includedPropDefinitions = determineIncludedPropTypes(
    propDefinitions,
    excludedPropTypes
  );

  if (!includedPropDefinitions.length) {
    return <small>No propTypes defined!</small>;
  }

  const propValProps = {
    maxPropObjectKeys,
    maxPropArrayLength,
    maxPropStringLength
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>property</Th>
          <Th>propType</Th>
          <Th>required</Th>
          <Th>default</Th>
          <Th>description</Th>
        </Tr>
      </Thead>
      <Tbody>
        {includedPropDefinitions.map(row => (
          <Tr key={row.property}>
            <Td>{row.property}</Td>
            <Td>
              <PrettyPropType propType={row.propType} />
            </Td>
            <Td>{row.required ? "yes" : "-"}</Td>
            <Td>
              {row.defaultValue === undefined ? (
                "-"
              ) : (
                <PropVal
                  val={row.defaultValue}
                  {...propValProps}
                  valueStyles={{}}
                />
              )}
            </Td>
            <Td>{multiLineText(row.description)}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

PropTable.displayName = "PropTable";
PropTable.defaultProps = {
  type: null,
  propDefinitions: [],
  excludedPropTypes: []
};
PropTable.propTypes = {
  type: PropTypes.func,
  maxPropObjectKeys: PropTypes.number.isRequired,
  maxPropArrayLength: PropTypes.number.isRequired,
  maxPropStringLength: PropTypes.number.isRequired,
  excludedPropTypes: PropTypes.arrayOf(PropTypes.string),
  propDefinitions: PropTypes.arrayOf(
    PropTypes.shape({
      property: PropTypes.string.isRequired,
      propType: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      required: PropTypes.bool,
      description: PropTypes.string,
      defaultValue: PropTypes.any
    })
  )
};
