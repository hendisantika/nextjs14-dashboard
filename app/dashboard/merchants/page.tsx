import Search from '@/app/ui/search';
import {CreateInvoice} from '@/app/ui/invoices/buttons';
import {lusitana} from '@/app/ui/fonts';
import {MerchantTableSkeleton} from "@/app/ui/skeletons";
import React, {Suspense, useActionState,} from "react";
import Table from '@/app/ui/invoices/table';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Merchants',
};

export default async function Page({
                                       searchParams,
                                   }: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    let count;
    const [data, setData] = useActionState(fetchData, null);

    async function fetchData() {
        'use server'
        const response = await fetch('https://61a0ea8a6c3b400017e69ae8.mockapi.io/api/v1/users/merchants');
        const result = await response.json();
        return result;
    }

    count = data.length;

    // const totalPages = await fetchMerchantPages(query);
    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Merchants</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search merchants..."/>
                <CreateInvoice/>
            </div>
            <Suspense key={query + currentPage} fallback={<MerchantTableSkeleton/>}>
                <Table query={query} currentPage={currentPage}/>
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                {/*<Pagination totalPages={totalPages}/>*/}
            </div>
        </div>
    );
}
