<script lang="ts">
  import type {UBalance} from '$lib/store';
  export let userBalance:UBalance ;
</script>

<div
  class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
>
  <h2>BNB : {Number(userBalance.bnbBalance).toFixed(2)}</h2>
  <div class="flex flex-col items-baseline">
    {#each userBalance.multicallResult as balance}
      {#if Number(balance.balance)}
        <p>{balance.symbol} : {balance.balance}</p>
      {/if}
    {/each}
  </div>
</div>
