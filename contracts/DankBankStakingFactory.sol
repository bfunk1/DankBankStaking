// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "./DankBankStaking.sol";

contract DankBankStakingFactory is AccessControl {
    bytes32 public constant FACTORY_ADMIN_ROLE = keccak256("FACTORY ADMIN");
    event Build(
        address indexed newStakingContract,
        address memeToken,
        address rewardToken,
        address stakingToken,
        uint256 lpTokenId,
        uint256 rewardRate
    );
    event AdminRoleGranted(address indexed beneficiary, address indexed caller);

    mapping(address => address) public stakingContractAddresses;

    constructor(address _owner) {
        _setupRole(FACTORY_ADMIN_ROLE, _owner);
        emit AdminRoleGranted(_owner, _msgSender());
    }

    function build(
        address _owner,
        address _memeToken,
        address _rewardToken,
        address _stakingToken,
        uint256 _lpTokenId,
        uint256 _rewardRate
    ) external onlyRole(FACTORY_ADMIN_ROLE) {
        DankBankStaking newDankBankStakingContract = new DankBankStaking(
            _owner,
            _memeToken,
            _rewardToken,
            _stakingToken,
            _lpTokenId,
            _rewardRate
        );
        stakingContractAddresses[_stakingToken] = address(newDankBankStakingContract);
        emit Build(
            address(newDankBankStakingContract),
            _rewardToken,
            _memeToken,
            _stakingToken,
            _lpTokenId,
            _rewardRate
        );
    }

    function isAdmin(address _address) public view returns (bool) {
        return hasRole(FACTORY_ADMIN_ROLE, _address);
    }

    function addAdminRole(address _address) external {
        grantRole(FACTORY_ADMIN_ROLE, _address);
        emit AdminRoleGranted(_address, _msgSender());
    }
}
