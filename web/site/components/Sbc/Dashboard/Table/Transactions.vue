<script setup lang="ts">
const columns = [
  {
    key: 'type',
    label: 'Transaction Type'
  },
  {
    key: 'date',
    label: 'Date (Pacific Time)'
  },
  {
    key: 'amount',
    label: 'Total Amount'
  },
  {
    key: 'pay_method',
    label: 'Payment Method'
  },
  {
    key: 'pay_status',
    label: 'Payment Status'
  }
]
const rows = [
  {
    id: 1,
    type: 'Some type',
    date: 'January 21, 2022 1:12pm',
    amount: '$16.50',
    pay_method: 'Pre-Authorized Debit',
    pay_status: 'Deleted'
  },
  {
    id: 2,
    type: 'Some type',
    date: 'January 21, 2022 1:12pm',
    amount: '$16.50',
    pay_method: 'Pre-Authorized Debit',
    pay_status: 'Deleted'
  },
  {
    id: 3,
    type: 'Some type',
    date: 'January 21, 2022 1:12pm',
    amount: '$16.50',
    pay_method: 'Pre-Authorized Debit',
    pay_status: 'Deleted'
  },
  {
    id: 4,
    type: 'Some type',
    date: 'January 21, 2022 1:12pm',
    amount: '$16.50',
    pay_method: 'Pre-Authorized Debit',
    pay_status: 'Deleted'
  },
  {
    id: 5,
    type: 'Some type',
    date: 'January 21, 2022 1:12pm',
    amount: '$16.50',
    pay_method: 'Pre-Authorized Debit',
    pay_status: 'Deleted'
  }
]

const page = ref(1)
const pageItems = ref(Array(11))
</script>
<template>
  <UCard class="mt-8">
    <div class="flex flex-col">
      <h3 class="text-lg font-semibold leading-6 text-gray-900 dark:text-white">
        Transactions
      </h3>
      <UButton
        label="Export CSV"
        icon="i-mdi-export"
        class="w-min whitespace-nowrap"
      />
    </div>

    <UTable
      class="min-h-40"
      :empty-state="{
        icon: 'i-heroicons-circle-stack-20-solid',
        label: 'No users found'
      }"
      :loading-state="{
        icon: 'i-heroicons-arrow-path-20-solid',
        label: 'Loading...'
      }"
      :rows
      :columns
    >
      <template #type-header="{ column }">
        <div class="flex flex-col font-normal">
          <span class="font-semibold">{{ column.label }}</span>
          <UInput
            variant="bcGov"
            placeholder="Transaction Type"
          />
        </div>
      </template>
      <template #date-header="{ column }">
        <div class="flex flex-col font-normal">
          <span class="font-semibold">{{ column.label }}</span>
          <div class="flex">
            <USelectMenu
              placeholder="Date"
              variant="bcGov"
              class="grow cursor-pointer"
              value-attribute="value"
              option-attribute="label"
            />
          </div>
        </div>
      </template>
      <template #amount-header="{ column }">
        <div class="flex flex-col font-normal">
          <span class="font-semibold">{{ column.label }}</span>
        </div>
      </template>
      <template #pay_method-header="{ column }">
        <div class="flex flex-col font-normal">
          <span class="font-semibold">{{ column.label }}</span>
        </div>
      </template>
      <template #pay_status-header="{ column }">
        <div class="flex flex-col font-normal">
          <span class="font-semibold">{{ column.label }}</span>
        </div>
      </template>
    </UTable>

    <template #footer>
      <div class="flex">
        <UPagination v-model="page" :page-count="5" :total="pageItems.length" class="ml-auto" />
      </div>
    </template>
  </UCard>
</template>
