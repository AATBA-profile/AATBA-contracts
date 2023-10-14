// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.20;

contract SubProfileTemplateRegistry {
    address immutable private _subProfileFactoryAddress;
    constructor() {
        _subProfileFactoryAddress= msg.sender;
    }

    SubProfileTemplate[] public registry;

    struct SubProfileTemplate {
        address subProfileTemplateAddress;
        uint256 index;
        string name;
    }


    function registerSubProfileTemplate(address _subProfileCollection, string memory name) external {
        require(msg.sender == _subProfileFactoryAddress, "only owner can register subProfile");
        registry.push(SubProfileTemplate(_subProfileCollection, registry.length, name));
    }

    function getSubProfileTemplate(uint256 index) external view returns(address subProfileTemplateAddress, uint256 index_, string memory name){
        require(index < registry.length, "index out of bounds");
        subProfileTemplateAddress = registry[index].subProfileTemplateAddress;
        index_ = registry[index].index;
        name = registry[index].name;
    }

    function registryLength() external view returns(uint256 length){
        length = registry.length;
    }

    function subProfileFactoryAddress() external view returns(address){
        return _subProfileFactoryAddress;
    }
}