import React from 'react';

const Header = () => {
    return (
        <header>
            <h1>Algorithms Overview</h1>
            <nav>
                <ul>
                    <li><a href="/algorithms/linear-search.html">Linear Search</a></li>
                    <li><a href="/algorithms/binary-search.html">Binary Search</a></li>
                    <li><a href="/algorithms/selection-sort.html">Selection Sort</a></li>
                    <li><a href="/algorithms/insertion-sort.html">Insertion Sort</a></li>
                    <li><a href="/algorithms/merge-sort.html">Merge Sort</a></li>
                    <li><a href="/algorithms/quicksort.html">Quicksort</a></li>
                    <li><a href="/algorithms/counting-sort.html">Counting Sort</a></li>
                    <li><a href="/algorithms/radix-sort.html">Radix Sort</a></li>
                    <li><a href="/algorithms/dijkstras.html">Dijkstra’s Algorithm</a></li>
                    <li><a href="/algorithms/bellman-ford.html">Bellman-Ford Algorithm</a></li>
                    <li><a href="/algorithms/floyd-warshall.html">Floyd-Warshall Algorithm</a></li>
                    <li><a href="/algorithms/huffman.html">Huffman Codes</a></li>
                    <li><a href="/algorithms/lzw.html">LZW Compression</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;