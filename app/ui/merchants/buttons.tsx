import {PencilIcon, PlusIcon, TrashIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';
import {deleteMerchant} from "@/app/lib/merchants";

export function CreateMerchant() {
    return (
        <Link
            href="/dashboard/merchants/create"
            className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
            <span className="hidden md:block">Create Invoice</span>{' '}
            <PlusIcon className="h-5 md:ml-4"/>
        </Link>
    );
}

export function UpdateMerchant({id}: { id: string }) {
    return (
        <Link
            href={`/dashboard/merchants/${id}/edit`}
            className="rounded-md border p-2 hover:bg-gray-100"
        >
            <PencilIcon className="w-5"/>
        </Link>
    );
}

export function DeleteMerchant({id}: { id: string }) {
    const deleteMerchantWithId = deleteMerchant.bind(null, id);
    return (
        <form action={deleteMerchantWithId}>
            <button className="rounded-md border p-2 hover:bg-gray-100">
                <span className="sr-only">Delete</span>
                <TrashIcon className="w-5"/>
            </button>
        </form>
    );
}
