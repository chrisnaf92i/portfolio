import { useRouter } from 'next/navigation';
import React from 'react';

export default function SingleProject({ params }: { params: { id: string } }) {
    return <main> project = {params.id}</main>;
}
