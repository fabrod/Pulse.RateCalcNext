import {Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper} from '@material-ui/core';

const MyTable = () => {
    function createData(name: any, calories: any, fat: any, carbs: any, protein: any) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    ];

    return (
        <TableContainer component={Paper}>
            <Table aria-label="caption table">
                {/* <caption>A basic table example with a caption</caption> */}
                <TableHead>
                    <TableRow>
                        <TableCell>Category</TableCell>
                        <TableCell align="right">Subcategory</TableCell>
                        <TableCell align="right">Total Cost</TableCell>
                        <TableCell align="right">Frequency</TableCell>
                        <TableCell align="right">Per Disbursement</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default MyTable;