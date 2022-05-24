pragma ^0.8.0

interface IDankBankMarketGSN {
    function getTotalMemeTokenPoolSupply(address memeToken) public view returns (uint256);
}